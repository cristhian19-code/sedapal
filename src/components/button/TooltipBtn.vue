<script setup>
import Button from 'primevue/button'
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'primary',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <Button :disabled="disabled" v-tooltip.bottom="{
        value: props.label,
    }" :icon="icon" :severity="color" text rounded />
</template>