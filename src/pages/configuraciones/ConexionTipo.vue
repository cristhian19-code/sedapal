<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Tipo', value: 'tipo' },
  { text: 'Descripcion', value: "nombre_tipo" }
]

const entity = ref({
  tipo: '',
  nombre_tipo: '',
})

const onCreate = () => {
  entity.value = {
    tipo: '',
    nombre_tipo: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="tipo" :entity="entity" title="Conexion Tipo" :headers="headers"
    entity-name="conexion-tipo">
    <template #form>
      <base-input v-model="entity.tipo" label="Tipo" />
      <base-input v-model="entity.nombre_tipo" label="Descripcion" />
    </template>
  </base-crud>
</template>
