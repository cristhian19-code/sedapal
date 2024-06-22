<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Estado', value: 'estado' },
  { text: 'Descripcion', value: 'nombre_estado' },
]

const entity = ref({
  estado: '',
  nombre_estado: '',
})

const onCreate = () => {
  entity.value = {
    estado: '',
    nombre_estado: '',
  }
}
</script>

<template>
  <base-crud @onCreate="onCreate" id-name="estado" :entity="entity" title="Conexion Estado" :headers="headers"
    entity-name="conexion-estado">
    <template #form>
      <base-input max-length="10" v-model="entity.estado" label="Estado" />
      <base-input max-length="50" v-model="entity.nombre_estado" label="Descripcion" />
    </template>
  </base-crud>
</template>
