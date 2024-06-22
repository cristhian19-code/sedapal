<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';

const headers = [
  { text: 'Estado', value: 'estado' },
  { text: 'Descripcion', value: 'nombre' },
]

const entity = ref({
  estado: '',
  nombre: '',
})

const onCreate = () => {
  entity.value = {
    estado: '',
    nombre: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="estado" :entity="entity" title="Revision Estado" :headers="headers"
    entity-name="revision-estado">
    <template #form>
      <base-input max-length="10" v-model="entity.estado" label="Categoria" />
      <base-input max-length="50" v-model="entity.nombre" label="nombre_categoria" />
    </template>
  </base-crud>
</template>
