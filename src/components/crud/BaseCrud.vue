<script setup>
import { computed, ref } from 'vue';
import { $axios } from '@/config/axios';

import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';

import TooltipBtn from '../button/TooltipBtn.vue';
import BaseButton from '../button/BaseButton.vue';

const emit = defineEmits(['onCreate', 'onEdit'])

const items = ref([])
const loading = ref(false);
const loadingAction = ref(false);
const dialogAddEdit = ref(false);
const isEdit = ref(false);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  entityName: {
    type: String,
    required: true,
  },
  hideAdd: {
    type: Boolean,
    default: false,
  },
  hideEdit: {
    type: Boolean,
    default: true,
  },
  hideDelete: {
    type: Boolean,
    default: false,
  },
  idName: {
    type: String,
    required: true,
  },
  hideRefresh: {
    type: Boolean,
    default: false,
  },
  entity: {
    type: Object,
    default: () => ({}),
  },
  headers: {
    type: Array,
    default: () => []
  },
  widthForm: {
    type: String,
    default: '30rem'
  }
})

const textAction = computed(() => isEdit.value ? 'Editar' : 'Agregar')

const getItems = async () => {
  try {
    loading.value = true;
    const { data } = await $axios(`${props.entityName}/`)
    items.value = data
    loading.value = false;
  } catch (error) {
    console.error(error)
  }
}

const onConfirmAction = async (action, id) => {
  loadingAction.value = true;

  try {
    const method = isEdit.value ? 'put' : 'post';

    await $axios[method](`${props.entityName}`, props.entity)

    loadingAction.value = false;
    dialogAddEdit.value = false;
    getItems();
  } catch (error) {
    console.error(error)
  }
}

const titleDialog = computed(() => `${textAction.value} ${props.title}`)

const headersComputed = computed(() => {
  return [
    ...props.headers,
    { text: 'Acciones', value: 'actions' }
  ]
})

const openDialogAddEdit = (edit = false, item) => {
  isEdit.value = edit;

  if (!edit) emit('onCreate')
  else emit('onEdit', item)

  dialogAddEdit.value = true;
}

const onConfirmDelete = async (item) => {
  try {
    await $axios.delete(`${props.entityName}/${item[props.idName]}`)
    getItems();
  } catch (error) {

  }
}

getItems();
</script>

<template>
  <Card class="w-full h-full">
    <template #content>
      <h1 class="mt-0 text-center">{{ title }}</h1>
      <div class="flex gap-2">
        <base-button v-if="!hideAdd" @click="openDialogAddEdit" label="Agregar" icon-pos="left" icon="pi pi-plus" />
        <base-button v-if="!hideRefresh" @click="getItems" severity="success" label="Refrescar" icon-pos="left"
          icon="pi pi-sync" />
      </div>

      <div class="card p-3 border-solid border-1 border-gray-200 border-round-md mt-4 w-full overflow-auto">
        <DataTable scrollable :loading="loading" paginator v-if="headersComputed.length > 0" :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]" :value="items" tableStyle="min-width: 20rem">
          <Column v-for="header in headersComputed" :field="header.value" :header="header.text">
            <template v-if="header.value === 'actions'" #body="{ data }">
              <tooltip-btn v-if="!hideEdit" @click="openDialogAddEdit(true, data)" icon="pi pi-pencil" color="warning"
                label="Editar" />
              <tooltip-btn @click="onConfirmDelete(data)" v-if="!hideDelete" icon="pi pi-trash" color="danger"
                label="Eliminar" />
              <slot name="actions" :item="data"></slot>
            </template>
          </Column>

          <template #empty> No customers found. </template>
        </DataTable>
      </div>
    </template>
  </Card>

  <Dialog :loading="loadingAction" v-model:visible="dialogAddEdit" maximizable modal :header="titleDialog"
    :style="{ width: widthForm }">
    <slot name="form"></slot>
    <template #footer>
      <div class="flex gap-2">
        <base-button @click="dialogAddEdit = false" outlined label="Cancelar" />
        <base-button :loading="loadingAction" @click="onConfirmAction" severity="success" label="Confirmar" />
      </div>
    </template>
  </Dialog>
</template>
