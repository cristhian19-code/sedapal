<script setup>
import { ref } from 'vue';

import Row from 'primevue/row';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import DataTable from 'primevue/datatable';

// custom components
import BaseButton from '../../components/button/BaseButton.vue';
import BaseDialog from '../../components/dialog/BaseDialog.vue';

const dialogAdd = ref(false)
const dialogAlert = ref(false)

const itemsCronograma = ref([
    { ficha_catastral: 'Ficha 1', area_asignada: 'Area 1', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 1' },
    { ficha_catastral: 'Ficha 2', area_asignada: 'Area 2', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 2' },
    { ficha_catastral: 'Ficha 3', area_asignada: 'Area 3', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 3' },
    { ficha_catastral: 'Ficha 4', area_asignada: 'Area 4', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 4' },
    { ficha_catastral: 'Ficha 5', area_asignada: 'Area 5', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 5' },
])

const items = ref([
    { actividad: 'Actividad 1', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 2', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 3', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 4', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 5', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
]);

const openDialogCronograma = () => {
    dialogAdd.value = true
}
</script>

<template>
    <div class="mx-auto" style="width: 90%;">
        <h1 class="text-center">Revisión de Cronogramas</h1>

        <DataTable :value="itemsCronograma" class="my-4" tableStyle="min-width: 50rem">
            <Column field="ficha_catastral" header="Ficha Catastral" :rowspan="2" />
            <Column field="area_asignada" header="Area Asignada" :rowspan="2" />
            <Column field="fecha_inicio" header="Fecha Inicio" :rowspan="2" />
            <Column field="fecha_final" header="Fecha Final" :rowspan="2" />
            <Column field="nro_inspectores" header="# Inspectores" :rowspan="2" />
            <Column field="jefe_catastro" header="Jefe Catastro" :rowspan="2" />
            <Column field="acciones" header="Acciones" style="min-width: 12rem">
                <template #body="{ data }">
                    <base-button text icon="pi pi-cog" @click="openDialogCronograma" />
                </template>
            </Column>
        </DataTable>
    </div>

    <base-dialog v-model="dialogAdd" title="Agregar Urbanización" text-label-no="Cancelar" text-label-yes="Guardar" hide-actions>
        <DataTable :value="items" class="my-4" tableStyle="min-width: 50rem">
            <ColumnGroup type="header">
                <Row>
                    <Column header="ACTIVIDADES" :rowspan="2" />
                    <Column header="MESES" :colspan="4" />
                </Row>
                <Row>
                    <Column v-for="i in 4" :header="`Mes ${i}`" />
                </Row>
            </ColumnGroup>

            <Column field="actividad" />
            <Column v-for="i in 4" :field="`mes_${i}`" />
        </DataTable>

        <div class="flex justify-content-center gap-3 mb-3">
            <base-button @click="dialogAlert" label="Autorizar Cronograma" />
            <base-button severity="success" label="Notificar Problema" />
        </div>
    </base-dialog>

    <base-dialog v-model="dialogAlert" title="Alert">
        <p>¿Seguro que autoriza este cronograma?</p>
    </base-dialog>
</template>