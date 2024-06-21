<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import ComboPredio from '@/components/combo/ComboPredio.vue';
import ComboTipoConexion from '@/components/combo/ComboTipoConexion.vue';
import ComboEstadoConexion from '@/components/combo/ComboEstadoConexion.vue';

const headers = [
  { text: 'Predio', value: 'id_predio' },
  { text: 'Tipo', value: 'tipo' },
  { text: 'Estado', value: 'estado' },
  { text: 'Numero de Medidor', value: 'num_medidor' },
]

const entity = ref({
  id_predio: "",
  tipo: "",
  estado: "",
  num_medidor: "",
})

const onCreate = () => {
  entity.value = {
    id_predio: "",
    tipo: "",
    estado: "",
    num_medidor: "",
  }
}
</script>

<template>
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_conexion" :entity="entity" title="Conexiones"
    width-form="600px" :headers="headers" entity-name="conexiones">
    <template #form>
      <!-- {{ entity }} -->
      <combo-predio v-model="entity.id_predio" />
      <combo-estado-conexion v-model="entity.estado" />
      <combo-tipo-conexion v-model="entity.tipo" />
      <base-input :max-length="3" type="number" v-model.number="entity.num_medidor" label="Numero Medidor" />
    </template>
  </base-crud>
</template>
