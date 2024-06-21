<script setup>
import { ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog'

import { useToast } from 'primevue/usetoast';
import { useConfirm } from "primevue/useconfirm";

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import TooltipBtn from '@/components/button/TooltipBtn.vue';
import BaseDialog from '@/components/dialog/BaseDialog.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import ComboUrbanizacion from '@/components/combo/ComboUrbanizacion.vue';

import { useUserStore } from '@/store/user'
import { $moment } from '@/config/moment';
import { $axios } from '@/config/axios';

const toast = useToast();
const confirm = useConfirm();

const showError = (message) => {
  toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
}

const showSuccess = (message) => {
  toast.add({ severity: 'success', summary: 'Exitoso', detail: message, life: 3000 });
}

const headers = [

  { text: 'ID', value: 'id_campania' },
  // { text: 'Empleado', value: 'id_empleado' },
  { text: 'Estado', value: 'estado' },
  { text: 'Fecha Inicio', value: 'fecha_inicio' },
  { text: 'Fecha Fin', value: 'fecha_fin' },
  { text: 'Inspectores', value: 'inspectores_campania' },
]

const headerActividad = [
  { text: 'ID', value: 'id_actividad' },
  { text: 'Descripcion', value: 'descripcion' },
  { text: 'Fecha', value: 'fecha' },
  { text: 'Urbanizacion', value: 'urbanizacion' },
]

const userStore = useUserStore();

const dialogActivity = ref(false);
const actividades = ref([]);
const loading = ref(false);
const crud = ref(null);

const entityActividad = ref({
  descripcion: "",
  fecha: "",
  urbanizacion: "",
  id_campania: "",
  id_usuario: "",
});

const openDialogDetail = async (item) => {
  dialogActivity.value = true;

  await initData(item.id_campania);

  entityActividad.value = {
    descripcion: "",
    fecha: $moment().format('YYYY-MM-DD'),
    urbanizacion: "",
    id_campania: item.id_campania,
    id_usuario: userStore.user.id,
  }
}

const initData = async (id) => {
  try {
    const { data } = await $axios.post(`/actividades/listar`, {
      id_campania: id
    })

    actividades.value = data;
  } catch (error) {

  }
}

const onSaveActividad = async () => {
  try {
    loading.value = true;
    const { data } = await $axios.post(`/actividades`, entityActividad.value);
    showSuccess(data.status);

    await initData(entityActividad.value.id_campania);

    entityActividad.value = {
      descripcion: "",
      fecha: $moment().format('YYYY-MM-DD'),
      urbanizacion: "",
      id_campania: entityActividad.value.id_campania,
      id_usuario: userStore.user.id,
    }
  } catch (error) {
    console.log(error);
    // showError(error.response.data.status);
  } finally {
    loading.value = false;
  }
}

const handleRejectCampain = (item) => {
  confirm.require({
    message: '¿Esta seguro de rechazar la campaña?',
    header: 'Rechazar',
    icon: 'pi pi-times-circle',
    rejectClass: 'p-button-secondary p-button-outlined',
    rejectLabel: 'Cancelar',
    acceptLabel: 'Aceptar',
    accept: async () => {
      try {
        await $axios.put(`/campanias/rechazar/${item.id_campania}`);
        await crud.value.getItems();
        toast.add({ severity: 'info', summary: 'Confirmacion', detail: 'Campaña rechazada', life: 3000 });
      } catch (e) {

      }
    },
    reject: () => {
    }
  });
}

const handleAcceptCampain = (item) => {
  confirm.require({
    message: '¿Esta seguro de aprobar la campaña?',
    header: 'Confirmacion',
    icon: 'pi pi-check-circle',
    rejectClass: 'p-button-secondary p-button-outlined',
    rejectLabel: 'Cancel',
    acceptLabel: 'Save',
    accept: async () => {
      try {
        await $axios.put(`/campanias/aceptar/${item.id_campania}`);
        await crud.value.getItems();
        toast.add({ severity: 'info', summary: 'Confirmacion', detail: 'Campaña rechazada', life: 3000 });
      } catch (e) {

      }
      toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    },
    reject: () => {
      toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
  });
}

</script>

<template>

  <ConfirmDialog>
    <template #message="slotProps">
      <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
        <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
        <p>{{ slotProps.message.message }}</p>
      </div>
    </template>
  </ConfirmDialog>

  <base-crud ref="crud" hide-add id-name="id_campania" :entity="entity" title="Campañas" :headers="headers"
    entity-name="campanias" hide-delete>
    <template #actions="{ item }">
      <tooltip-btn label="Detalle" @click="openDialogDetail(item)" icon="pi pi-bars" />
      <tooltip-btn :disabled="item.estado !== 'Pendiente'" severity="danger" label="Rechazar"
        @click="handleRejectCampain(item)" icon="pi pi-times" />
      <tooltip-btn :disabled="item.estado !== 'Pendiente'" severity="success" label="Aprobar"
        @click="handleAcceptCampain(item)" icon="pi pi-check" />
    </template>
  </base-crud>

  <base-dialog hide-actions v-model="dialogActivity" title="Agregar Actividad">
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

    <DataTable scrollable paginator :value="actividades" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" class="mb-3">
      <Column v-for="header in headerActividad" :field="header.value" :header="header.text">
      </Column>

      <template #empty> No hay data. </template>
    </DataTable>
  </base-dialog>
</template>
