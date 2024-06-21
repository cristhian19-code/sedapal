<script setup>
import Button from "primevue/button";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  severity: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  iconPos: {
    type: String,
    default: "right",
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>

<template>
  <Button @click="onClick" :label="label" :text="text" size="small" :outlined="outlined" :severity="severity"
    :icon="icon" :iconPos="iconPos" :loading="loading" />
</template>

<style scoped></style>
