<script setup>
import BaseInput from '../../components/input/BaseInput.vue';
import BaseButton from '../../components/button/BaseButton.vue';

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Exitoso', detail: 'Datos guardados correctamente', life: 3000 });
  dialogConfirmation.value = false;
};
</script>

<template>
  <div class="mx-auto" style="width: 70%">
    <h1>REGISTRO CATASTRAL DE CONSUMIDOR</h1>

    <base-input label="Nombres" />
    <base-input label="Apellidos" />
    <base-input label="Carreo" />
    <base-input label="Dirección" />

    <div class="flex justify-content-center gap-5">
      <base-button label="Registrar" />
      <base-button severity="danger" label="Cancelar" />
    </div>
    <Toast />

  </div>
</template>

<style scoped></style>