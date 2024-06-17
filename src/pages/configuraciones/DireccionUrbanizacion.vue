<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';
const headers = [
  { text: 'Urbanizacion', value: 'urbanizacion' },
  { text: 'Descripcion', value: "nombre_urbanizacion" }
]

const entity = ref({
  urbanizacion: '',
  nombre_tipo_via: '',
})

const onCreate = () => {
  entity.value = {
    urbanizacion: '',
    nombre_tipo_via: '',
  }
}

</script>

<template>
  <base-crud @onCreate="onCreate" id-name="urbanizacion" :entity="entity" title="Direccion Urbanizacion" :headers="headers"
    entity-name="direccion-urbanizacion">
    <template #form>
      <base-input-number v-model="entity.urbanizacion" label="Urbanizacion" />
      <base-input v-model="entity.nombre_urbanizacion" label="Descripcion" />
    </template>
  </base-crud>
</template>
