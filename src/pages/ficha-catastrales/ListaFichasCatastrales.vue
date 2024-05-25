<script setup>
import { ref } from 'vue';

import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

// custom components
import BaseButton from '../../components/button/BaseButton.vue';
import BaseDialog from '../../components/dialog/BaseDialog.vue';
import BaseInput from '../../components/input/BaseInput.vue';

const dialogEdit = ref(false)

const itemsCronograma = ref([
    { ficha: 'Ficha 1', urbanizacion: 'Urbanización 1', fecha_creacion: '2021-10-10', fecha_visita: '2021-10-10', analista: 'Analista 1' },
    { ficha: 'Ficha 2', urbanizacion: 'Urbanización 2', fecha_creacion: '2021-10-10', fecha_visita: '2021-10-10', analista: 'Analista 2' },
    { ficha: 'Ficha 3', urbanizacion: 'Urbanización 3', fecha_creacion: '2021-10-10', fecha_visita: '2021-10-10', analista: 'Analista 3' },
    { ficha: 'Ficha 4', urbanizacion: 'Urbanización 4', fecha_creacion: '2021-10-10', fecha_visita: '2021-10-10', analista: 'Analista 4' },
    { ficha: 'Ficha 5', urbanizacion: 'Urbanización 5', fecha_creacion: '2021-10-10', fecha_visita: '2021-10-10', analista: 'Analista 5' },
])

const openDialogEdit = () => {
    dialogEdit.value = true
}

</script>

<template>
    <div class="mx-auto" style="width: 90%;">
        <h1 class="text-center">Fichas Catastrales</h1>

        <DataTable :value="itemsCronograma" class="my-4" tableStyle="min-width: 50rem">
            <Column field="ficha" header="Ficha" />
            <Column field="urbanizacion" header="Urbanización" />
            <Column field="fecha_creacion" header="Fecha Creación" />
            <Column field="fecha_visita" header="Fecha de Visita" />
            <Column field="analista" header="Analista" />
            <Column field="acciones" header="Acciones" style="min-width: 12rem">
                <template #body="{ data }">
                    <base-button text icon="pi pi-file" />
                    <base-button @click="openDialogEdit" text icon="pi pi-file-edit" />
                </template>
            </Column>
        </DataTable>
    </div>

    <base-dialog v-model="dialogEdit" title="Coreccion de Ficha" text-label-yes="Corregir" text-label-no="Cancelar"
        @confirm="onConfirmProblema">
        <base-input label="Nro" />
        <base-input label="Fecha Creación" />
        <base-input label="Fecha de Visita" />
        <base-input label="Analista" />
        <base-input label="Inspector" />
        <base-input label="Dirección" />
        <base-input label="Descripcion" />
    </base-dialog>
</template>