<script setup>
import { ref } from 'vue';

import { useToast } from 'primevue/usetoast';


import BaseInput from '../components/input/BaseInput.vue';
import BaseButton from '../components/button/BaseButton.vue';
import BaseDialog from '../components/dialog/BaseDialog.vue';
import Toast from 'primevue/toast';

const dialogConfirmation = ref(false);
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Exitoso', detail: 'Datos registrados correctamente', life: 3000 });
    dialogConfirmation.value = false;
};
</script>

<template>
    <Toast />
    <div class="w-fit mx-auto my-auto ">
        <div class="text-center">
            <h1>Generación de campaña catastral</h1>
            <h2>Campaña catastral #1</h2>
            <p>Ingrese el numero de inspectores para la campaña catastral #1</p>
        </div>
        <div class="mt-8">
            <base-input type="number" label="Nro. de Inspectores" />
            <base-button @click="dialogConfirmation = true" label="Aceptar" />
        </div>
    </div>

    <base-dialog v-model="dialogConfirmation" title="¿Esta seguro de guardar?" @confirm="showSuccess" />
</template>

<style scoped></style>