<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';

const headers = [
  { text: 'Categoria', value: 'categoria' },
  { text: 'Descripcion', value: 'nombre_categoria' },
]

const entity = ref({
  categoria: '',
  nombre_categoria: '',
})

const onCreate = () => {
  entity.value = {
    categoria: '',
    nombre_categoria: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="categoria" :entity="entity" title="Predio Categoria" :headers="headers"
    entity-name="predio-categoria">
    <template #form>
      <base-input max-length="2" v-model="entity.categoria" label="Categoria" />
      <base-input max-length="50" v-model="entity.nombre_categoria" label="nombre_categoria" />
    </template>
  </base-crud>
</template>
