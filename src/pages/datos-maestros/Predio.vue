<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';
import ComboCliente from '@/components/combo/ComboCliente.vue';
import ComboCategoriaPredio from '@/components/combo/ComboCategoriaPredio.vue';
import ComboNivelSocioeconomico from '@/components/combo/ComboNivelSocioeconomico.vue';

const headers = [
  { text: 'Predio', value: 'id_predio' },
  { text: 'Cliente', value: 'id_cliente' },
  { text: 'Niveles', value: 'niveles' },
  { text: 'Nivel Socioeconomico', value: 'nivel_socioeco' },
  { text: 'Categoria', value: 'categoria' },
]

const entity = ref({
  id_cliente: "",
  niveles: "",
  nivel_socioeco: "",
  categoria: "",
})

const onCreate = () => {
  entity.value = {
    id_cliente: "",
    niveles: "",
    nivel_socioeco: "",
    categoria: "",
  }
}
</script>

<template>
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_predio" :entity="entity" title="Predios"
    width-form="600px" :headers="headers" entity-name="predios">
    <template #form>
      <!-- {{ entity }} -->
      <combo-cliente v-model="entity.id_cliente" />
      <combo-categoria-predio v-model="entity.categoria" />
      <base-input-number v-model="entity.niveles" label="Niveles" />
      <combo-nivel-socioeconomico v-model="entity.nivel_socioeco" />
    </template>
  </base-crud>
</template>
