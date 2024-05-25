<script setup>
import { ref } from 'vue';

import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

// custom components
import BaseButton from '../../components/button/BaseButton.vue';
import BaseDialog from '../../components/dialog/BaseDialog.vue';
import BaseInput from '../../components/input/BaseInput.vue';

const dialogNotificacion = ref(false)
const dialogProblema = ref(false)
const dialogFecha = ref(false)
const dialogConfirmFecha = ref(false)

const itemsCronograma = ref([
    { ficha_catastral: 'Ficha 1', area_asignada: 'Area 1', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 1' },
    { ficha_catastral: 'Ficha 2', area_asignada: 'Area 2', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 2' },
    { ficha_catastral: 'Ficha 3', area_asignada: 'Area 3', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 3' },
    { ficha_catastral: 'Ficha 4', area_asignada: 'Area 4', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 4' },
    { ficha_catastral: 'Ficha 5', area_asignada: 'Area 5', fecha_inicio: '2021-10-10', fecha_final: '2021-10-10', nro_inspectores: 2, jefe_catastro: 'Jefe 5' },
])

const openDialogProblema = () => {
    dialogProblema.value = true
}

const onConfirmProblema = () => {
    dialogProblema.value = false
    dialogNotificacion.value = true
}

const onConfirFecha = () => {
    dialogFecha.value = true
}

const onConfirmEnviarFecha = () => {
    dialogFecha.value = false
    dialogConfirmFecha.value = true
}
</script>

<template>
    <div class="mx-auto" style="width: 90%;">
        <h1 class="text-center">Cronograma que se va a realizar</h1>

        <DataTable :value="itemsCronograma" class="my-4" tableStyle="min-width: 50rem">
            <Column field="ficha_catastral" header="Ficha Catastral" :rowspan="2" />
            <Column field="area_asignada" header="Area Asignada" :rowspan="2" />
            <Column field="fecha_inicio" header="Fecha Inicio" :rowspan="2" />
            <Column field="fecha_final" header="Fecha Final" :rowspan="2" />
            <Column field="nro_inspectores" header="# Inspectores" :rowspan="2" />
            <Column field="jefe_catastro" header="Jefe Catastro" :rowspan="2" />
            <Column field="acciones" header="Acciones" style="min-width: 12rem">
                <template #body="{ data }">
                    <base-button text icon="pi pi-cog" />
                </template>
            </Column>
        </DataTable>
        <div class="flex justify-content-center gap-5">
            <base-button @click="openDialogProblema" severity="info" label="Notificar Problema" />
            <base-button @click="onConfirFecha" severity="success" label="Notificar Fecha" />
        </div>
    </div>

    <base-dialog v-model="dialogProblema" title="Alert" text-label-yes="Enviar" text-label-no="Cancelar"
        @confirm="onConfirmProblema">
        <base-input label="Titulo dee Problema" />
        <base-input label="Descripción" />
    </base-dialog>

    <base-dialog v-model="dialogNotificacion" title="Alert" text-label-yes="Enviar" text-label-no="Cancelar">
        <p>¿Esta seguro de notificar problema?</p>
    </base-dialog>

    <base-dialog v-model="dialogFecha" title="Alert" text-label-yes="Enviar" text-label-no="Cancelar" @confirm="onConfirmEnviarFecha">
        <base-input label="Mensaje" />
    </base-dialog>

    <base-dialog v-model="dialogConfirmFecha" title="Alert" text-label-yes="Enviar" text-label-no="Cancelar">
        <p>¿Esta seguro de querer enviar este mensaje a todos los usuarios?</p>
    </base-dialog>
</template>