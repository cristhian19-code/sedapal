<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Tipo', value: 'tipo_via' },
  { text: 'Descripcion', value: "nombre_tipo_via" }
]

const entity = ref({
  tipo_via: '',
  nombre_tipo_via: '',
})

const onCreate = () => {
  entity.value = {
    tipo_via: '',
    nombre_tipo_via: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="tipo" :entity="entity" title="Direccion Tipo Via" :headers="headers"
    entity-name="direccion-tipo-via">
    <template #form>
      <base-input v-model="entity.tipo_via" label="Tipo Via" />
      <base-input v-model="entity.nombre_tipo_via" label="Descripcion" />
    </template>
  </base-crud>
</template>
