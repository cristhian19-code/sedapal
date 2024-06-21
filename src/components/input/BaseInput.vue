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
  },
  disabled: {
    type: Boolean,
    default: false
  },
  maxLength: {
    type: [String, Number],
    default: null
  }
})

const onKeypress = (e) => {
  if (Boolean(props.maxLength)) {
    model.value = model.value.length > Number(props.maxLength) ? model.value.substring(0, props.maxLength) : model.value;
  };
}

const model = useVModel(props)
</script>

<template>
  <div class="flex flex-column gap-2 w-full mb-3">
    <label class="text-sm" :for="label">{{ label }}</label>
    <InputText :disabled="disabled" @keypress="onKeypress" :type="type" :id="label" v-model="model" />
    <!--    <small id="username-help">Enter your username to reset your password.</small>-->
  </div>
</template>

<style scoped></style>