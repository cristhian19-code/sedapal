<script setup>
import { onBeforeUpdate, ref } from 'vue';

import { useToast } from 'primevue/usetoast';


import BaseInput from '@/components/input/BaseInput.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import ComboEmpleado from '@/components/combo/ComboEmpleado.vue';
import ComboUrbanizacion from '@/components/combo/ComboUrbanizacion.vue';

import Steps from 'primevue/steps';
import Toast from 'primevue/toast';

import { $axios } from '@/config/axios';
import { useUserStore } from '@/store/user';

const toast = useToast();
const numInspectores = ref(0);
const loading = ref(false);
const step = ref(0);
const userStore = useUserStore();

const entityCampania = ref({
    inspectores_campania: "",
    fecha_inicio: "",
    fecha_fin: "",
    estado: "Pendiente",
    id_empleado: "",
});

const entityActividad = ref({
    descripcion: "",
    fecha: "",
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

const showError = (message) => {
    toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
}

const showSuccess = (message) => {
    toast.add({ severity: 'success', summary: 'Exitoso', detail: message, life: 3000 });
}

const validateInspect = async () => {
    if (!Boolean(numInspectores.value)) {
        showError('Digite numero de inspectores');
    } else {
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
            fecha: "",
            urbanizacion: "",
        }
    } catch (error) {
        console.log(error);
        // showError(error.response.data.status);
    } finally {
        loading.value = false;
    }
}

</script>

<template>
    <Toast />
    <div class="w-full mx-auto my-auto ">
        <Steps class="my-5" v-model:activeStep="step" :model="steppers" :readonly="false">
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
                        <base-input v-model="entityCampania.inspectores_campania" disabled type="number"
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
            <base-input label="Descripcion" v-model="entityActividad.descripcion" />
            <base-button class="block mx-auto" :loading="loading" @click="onSaveActividad" label="Guardar" />
        </div>
    </div>
</template>

<style scoped></style>