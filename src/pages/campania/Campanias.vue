<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import TooltipBtn from '@/components/button/TooltipBtn.vue';
import BaseDialog from '@/components/dialog/BaseDialog.vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const headers = [
  { text: 'Empleado', value: 'id_empleado' },
  { text: 'Estado', value: 'estado' },
  { text: 'Fecha Inicio', value: 'fecha_inicio' },
  { text: 'Fecha Fin', value: 'fecha_fin' },
  { text: 'Inspectores', value: 'inspectores_campania' },
]

const headerActividad = [
  { text: 'Descripcion', value: 'descripcion' },
  { text: 'Fecha', value: 'fecha' },
  { text: 'Urbanizacion', value: 'urbanizacion' },
]

const dialogActivity = ref(false);

const entityActividad = ref({
  descripcion: "",
  fecha: "",
  urbanizacion: "",
  id_campania: "",
  id_usuario: "",
});

const openDialogDetail = () => {
  dialogActivity.value = true;

  entityActividad.value = {
    descripcion: "",
    fecha: "",
    urbanizacion: "",
    id_campania: "",
    id_usuario: "",
  }
}

</script>

<template>
  <base-crud hide-add id-name="id_campania_estado" :entity="entity" title="Campaña Estado" :headers="headers"
    entity-name="campanias">
    <template #actions="{ item }">
      <tooltip-btn label="Detalle" @click="openDialogDetail" icon="pi pi-bars" />
    </template>
  </base-crud>

  <base-dialog v-model="dialogActivity" title="Agregar Actividad">
    <DataTable :value="products" class="mb-3">
      <Column field="code" header="Code"></Column>
    </DataTable>
  </base-dialog>
</template>
