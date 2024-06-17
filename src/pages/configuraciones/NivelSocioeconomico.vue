<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';

const headers = [
  { text: 'Nivel Socioeconomico', value: 'nivel_socioeco' },
  { text: 'Descripcion', value: 'nombre_socioeco' },
]

const entity = ref({
  nombre: '',
})

const onCreate = () => {
  entity.value = {
    nivel_socioeco: '',
    nombre_socioeco: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="id_nivel_socioeconomico" :entity="entity" title="Nivel Socioeconomico" :headers="headers"
    entity-name="estado-socioeconomico">
    <template #form>
      <base-input v-model="entity.nombre" label="Nivel Socioeconomico" />
    </template>
  </base-crud>
</template>
