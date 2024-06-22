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
  nivel_socioeco: '',
  nombre_socioeco: '',
})

const onCreate = () => {
  entity.value = {
    nivel_socioeco: '',
    nombre_socioeco: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="nivel_socioeco" :entity="entity" title="Nivel Socioeconomico"
    :headers="headers" entity-name="nivel-socioeconomico">
    <template #form>
      <base-input max-length="2" v-model="entity.nivel_socioeco" label="Nivel" />
      <base-input max-length="50" v-model="entity.nombre_socioeco" label="Descripcion" />
    </template>
  </base-crud>
</template>
