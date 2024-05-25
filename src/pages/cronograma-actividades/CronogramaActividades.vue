<script setup>
import { ref } from 'vue';

import Row from 'primevue/row';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import DataTable from 'primevue/datatable';

// custom components
import BaseInput from '../../components/input/BaseInput.vue';
import BaseButton from '../../components/button/BaseButton.vue';
import BaseDialog from '../../components/dialog/BaseDialog.vue';

const dialogAdd = ref(false)

const items = ref([
    { actividad: 'Actividad 1', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 2', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 3', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 4', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
    { actividad: 'Actividad 5', mes_1: 2, mes_2: 3, mes_3: 8, mes_4: 10 },
]);

const itemsUrbanizacion = ref([
    { ficha_asociada: 'Ficha 1', fecha_revision: '2021-10-10', inspector_encargado: 'Inspector 1' },
    { ficha_asociada: 'Ficha 2', fecha_revision: '2021-10-10', inspector_encargado: 'Inspector 2' },
    { ficha_asociada: 'Ficha 3', fecha_revision: '2021-10-10', inspector_encargado: 'Inspector 3' },
    { ficha_asociada: 'Ficha 4', fecha_revision: '2021-10-10', inspector_encargado: 'Inspector 4' },
    { ficha_asociada: 'Ficha 5', fecha_revision: '2021-10-10', inspector_encargado: 'Inspector 5' },
])
</script>

<template>
    <div class="mx-auto my-auto" style="width: 90%;">
        <div class="grid">
            <base-input class="col" label="Responsable de Cronograma" />
            <base-input type="date" class="col" label="Fecha de Inicio" />
            <base-input type="date" class="col" label="Fecha de Termino" />
        </div>

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

        <div class="flex justify-content-center gap-3">
            <base-button @click="dialogAdd = true" label="Agregar Urbanización" />
            <base-button severity="danger" label="Eliminar Cronograma" />
            <base-button severity="success" label="Guardar Cronograma" />
        </div>
    </div>

    <base-dialog v-model="dialogAdd" title="Agregar Urbanización" text-label-no="Cancelar" text-label-yes="Guardar">
        <DataTable :value="itemsUrbanizacion" class="my-4" tableStyle="min-width: 600px">
            <Column header="Ficha Asociadad" field="ficha_asociada" />
            <Column header="Fecha Revisión" field="fecha_revision" />
            <Column header="Inspector Encargado" field="inspector_encargado" />
        </DataTable>
    </base-dialog>
</template>