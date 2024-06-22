<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Cargo', value: 'nombre' },
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
    id_cargo: item.id_cargo,
    nombre: item.nombre,
  }
}
</script>

<template>
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_cargo" :entity="entity" title="Cargos" :headers="headers" entity-name="cargos">
    <template #form>
      <base-input max-length="50" v-model="entity.nombre" label="Cargo"/>
    </template>
  </base-crud>
</template>
