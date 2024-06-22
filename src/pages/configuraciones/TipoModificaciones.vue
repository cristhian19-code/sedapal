<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';

const headers = [
  { text: 'Descripcion', value: 'nombre_modificacion' },
]

const entity = ref({
  nombre_modificacion: '',
})

const onCreate = () => {
  entity.value = {
    nombre_modificacion: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="id_tipo_modificacion" :entity="entity" title="Tipo Modificacion"
    :headers="headers" entity-name="tipo-modificaciones">
    <template #form>
      <base-input max-length="10" v-model="entity.nombre_modificacion" label="Descripcion" />
    </template>
  </base-crud>
</template>
