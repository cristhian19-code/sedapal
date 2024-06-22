<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Genero', value: 'nombre' },
]

const entity = ref({
  nombre: '',
})

const onCreate = () => {
  entity.value = {
    nombre: '',
  }
}

const onEdit = (item) => {
  entity.value = {
    id_genero: item.id_genero,
    nombre: item.nombre,
  }
}
</script>

<template>
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_genero" :entity="entity" title="Generos" :headers="headers" entity-name="generos">
    <template #form>
      <base-input max-length="10" v-model="entity.nombre" label="Genero"/>
    </template>
  </base-crud>
</template>
