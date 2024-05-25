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
    <h1>ACTUALIZACIÓN DE DATOS</h1>
    <div class="grid">
      <div class="col-6">
        <h2>PREDIO</h2>
        <base-input label="Codigo" />
        <base-input label="Niveles" />
        <base-input label="Nivel Socioeconomico" />
        <base-input label="Categoria" />
        <base-button @click="showSuccess" label="Guardar" />
      </div>

      <div class="col-6">
        <h2>CONEXION</h2>
        <base-input label="Codigo" />
        <base-input label="Estado" />
        <base-input label="Tipo" />
        <base-input label="Medidor" />
        <base-button @click="showSuccess" label="Guardar" />
      </div>

      <div class="col-6">
        <h2>CONSUMIDOR</h2>
        <base-input label="Codigo" />
        <base-input label="DNI" />
        <base-input label="Nombre Primario" />
        <base-input label="Nombre Secundario" />
        <base-input label="Apellido Paterno" />
        <base-input label="Apellido Materno" />
        <base-input label="Genero" />
        <base-input label="Estado Civil" />
        <base-input label="Correo" />
        <base-input label="Telefono" />
        <base-button @click="showSuccess" label="Guardar" />
      </div>
    </div>
    
    <Toast />

  </div>
</template>

<style scoped></style>