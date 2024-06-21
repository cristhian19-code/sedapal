<script setup>
import { ref } from 'vue';

import Dropdown from 'primevue/dropdown';

import { $axios } from '@/config/axios';

import { useVModel } from '../../composables/useVmodel';

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
    default: "Tipo Conexion"
  },
  type: {
    type: String,
    default: "text"
  },
  optionLabel: {
    type: String,
    default: "tipo"
  },
  optionValue: {
    type: String,
    default: "tipo"
  },
  entityName: {
    type: String,
    default: "conexion-tipo"
  }
})

const items = ref([]);

const getItem = async () => {
  try {
    const { data } = await $axios(`${props.entityName}/`)
    items.value = data;
  } catch (error) {

  }
}

const model = useVModel(props)

getItem();
</script>

<template>
  <div class="flex flex-column gap-2 w-full mb-3">
    <label class="text-sm" :for="label">{{ label }}</label>
    <Dropdown v-model="model" :options="items" :optionLabel="optionLabel" :optionValue="optionValue" class="w-full" />
    <!--    <small id="username-help">Enter your username to reset your password.</small>-->
  </div>
</template>

<style scoped></style>