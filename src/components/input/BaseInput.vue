<script setup>
import InputText from 'primevue/inputtext'
import { useVModel } from '../../composables/useVmodel';

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
})

const model = useVModel(props)
</script>

<template>
  <div class="flex flex-column gap-2 w-full mb-3">
    <label :for="label">{{ label }}</label>
    <InputText :type="type" :id="label" v-model="model" />
<!--    <small id="username-help">Enter your username to reset your password.</small>-->
  </div>
</template>

<style scoped>

</style>