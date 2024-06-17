<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Nombre', value: 'nombre' },
]

const entity = ref({
  nombre: '',
})

const onCreate = () => {
  entity.value = {
    nombre: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="id_campania_estado" :entity="entity" title="Campaña Estado"
    :headers="headers" entity-name="campania-estado">
    <template #form>
      <base-input v-model="entity.nombre" label="Estado" />
    </template>
  </base-crud>
</template>
