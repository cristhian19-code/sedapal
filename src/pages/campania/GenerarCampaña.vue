<script setup>
import { onBeforeUpdate, ref } from 'vue';

import { useToast } from 'primevue/usetoast';


import BaseInput from '@/components/input/BaseInput.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import ComboEmpleado from '@/components/combo/ComboEmpleado.vue';
import ComboUrbanizacion from '@/components/combo/ComboUrbanizacion.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Steps from 'primevue/steps';
import Toast from 'primevue/toast';

import { $moment } from '@/config/moment';
import { $axios } from '@/config/axios';
import { useUserStore } from '@/store/user';

const toast = useToast();
const numInspectores = ref(0);
const loading = ref(false);
const actividades = ref([]);
const step = ref(0);
const userStore = useUserStore();

const entityCampania = ref({
    inspectores_campania: "",
    nombre: "",
    fecha_inicio: $moment().format('YYYY-MM-DD'),
    fecha_fin: $moment().add(3, 'day').format('YYYY-MM-DD'),
    estado: "Pendiente",
    id_empleado: "",
});

const entityActividad = ref({
    descripcion: "",
    fecha: $moment().format('YYYY-MM-DD'),
    urbanizacion: "",
    id_campania: "",
    id_usuario: "",
});

const steppers = [
    {
        icon: 'pi pi-users',
        label: 'Num. Inspectores'
    },
    {
        icon: 'pi pi-calendar',
        label: 'Crear Campaña'
    },
    {
        icon: 'pi pi-check',
        label: 'Asignar Actividades'
    }
]

const headerActividad = [
    { text: 'ID', value: 'id_actividad' },
    { text: 'Descripcion', value: 'descripcion' },
    { text: 'Fecha', value: 'fecha' },
    { text: 'Urbanizacion', value: 'urbanizacion' },
]

const handleReset = () => {
    step.value = 0;
    numInspectores.value = 0;
    entityCampania.value = {
        inspectores_campania: "",
        fecha_inicio: "",
        fecha_fin: "",
        nombre: "",
        estado: "Pendiente",
        id_empleado: "",
    };
    entityActividad.value = {
        descripcion: "",
        fecha: "",
        urbanizacion: "",
        id_campania: "",
        id_usuario: "",
    };
}

const showError = (message) => {
    toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
}

const showSuccess = (message) => {
    toast.add({ severity: 'success', summary: 'Exitoso', detail: message, life: 3000 });
}

const validateInspect = async () => {
    if (Number(numInspectores.value) < 1) return showError('Numero de inspectores debe ser mayor a 0');

    try {
        loading.value = true;
        const { data } = await $axios.post(`/inspectores/validate`, {
            numero: numInspectores.value
        })
        showSuccess(data.status)
        entityCampania.value.inspectores_campania = numInspectores.value;
        step.value = 1;
    } catch (error) {
        showError(error.response.data.status);
    } finally {
        loading.value = false;
    }
};

const onSaveCampania = async () => {
    try {
        loading.value = true;
        const { data } = await $axios.post(`/campanias`, entityCampania.value);
        showSuccess(data.status);

        entityActividad.value.id_campania = data.id;

        step.value = 2;
    } catch (error) {
        showError(error.response.data.status);
    } finally {
        loading.value = false;
    }
}

const onSaveActividad = async () => {
    try {
        entityActividad.value.id_usuario = userStore.user.id
        loading.value = true;
        const { data } = await $axios.post(`/actividades`, entityActividad.value);
        showSuccess(data.status);

        entityActividad.value = {
            ...entityActividad.value,
            descripcion: "",
            fecha: $moment().format('YYYY-MM-DD'),
            urbanizacion: "",
        }
        await initData();
    } catch (error) {
        console.log(error);
        // showError(error.response.data.status);
    } finally {
        loading.value = false;
    }
}

const initData = async () => {
    if (!Boolean(entityActividad.value.id_campania)) return actividades.value = [];

    try {
        const { data } = await $axios.post(`/actividades/listar`, {
            id_campania: entityActividad.value.id_campania
        })

        actividades.value = data;
    } catch (error) {

    }
}

</script>

<template>
    <Toast />
    <div class="w-full mx-auto my-auto ">
        <base-button severity="warning" class="block mx-auto" :loading="loading" @click="handleReset"
            label="Resetear Datos" icon="pi pi-sync" />

        <Steps class="my-5" v-model:activeStep="step" :model="steppers">
            <template #item="{ item, active }">
                <span
                    :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer', { 'bg-primary': active, 'surface-overlay text-primary': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>

        <!-- Step 1 -->
        <div v-if="step === 0">
            <div class="text-center">
                <h1>Generación de campaña catastral</h1>
                <p>Ingrese el numero de inspectores para la campaña catastral</p>
            </div>
            <div class="mt-8 w-fit mx-auto">
                <base-input v-model="numInspectores" type="number" label="Nro. de Inspectores" />
                <base-button class="block mx-auto" :loading="loading" @click="validateInspect" label="Validar" />
            </div>
        </div>

        <!-- Step 2 -->
        <div v-if="step === 1">
            <div class="mx-auto" style="width: 600px;">
                <div class="grid">
                    <div class="col-6">
                        <base-input v-model.number="entityCampania.inspectores_campania" disabled type="number"
                            label="Nro. de Inspectores" />
                    </div>
                    <div class="col-6">
                        <!-- <combo-estado-campania v-model="entityCampania.estado" /> -->
                        <combo-empleado v-model="entityCampania.id_empleado" />
                    </div>
                </div>
                <div class="grid">
                    <div class="col-6">
                        <base-input label="Fecha Inicio" type="date" v-model="entityCampania.fecha_inicio" />
                    </div>
                    <div class="col-6">
                        <base-input label="Fecha Fin" type="date" v-model="entityCampania.fecha_fin" />
                    </div>
                </div>
                <base-input label="Nombre Campaña" v-model="entityCampania.nombre" />
            </div>
            <base-button class="block mx-auto" :loading="loading" @click="onSaveCampania" label="Continuar" />
        </div>

        <div v-if="step === 2">
            <div class="grid w-full">
                <div class="col-6">
                    <base-input label="Fecha" type="date" v-model="entityActividad.fecha" />
                </div>
                <div class="col-6">
                    <combo-urbanizacion v-model="entityActividad.urbanizacion" />
                </div>
            </div>

            <base-input max-length="255" label="Descripcion" v-model="entityActividad.descripcion" />

            <base-button class="block mx-auto my-5" :loading="loading" @click="onSaveActividad" label="Guardar" />
            <DataTable scrollable paginator :value="actividades" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
                <Column v-for="header in headerActividad" :field="header.value" :header="header.text"
                    :key="header.value">
                </Column>

                <template #empty> No hay data. </template>
            </DataTable>
        </div>
    </div>
</template>

<style scoped></style>