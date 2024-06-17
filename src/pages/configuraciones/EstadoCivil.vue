<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';

const headers = [
  { text: 'Estaod Civil', value: 'nombre' },
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
  <base-crud @onCreate="onCreate" id-name="id_estado_civil" :entity="entity" title="Estado Civil" :headers="headers"
    entity-name="estado-civil">
    <template #form>
      <base-input v-model="entity.nombre" label="Estado Civil" />
    </template>
  </base-crud>
</template>
