<script setup>
import Calendar from 'primevue/calendar'
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
    dateFormat: {
        type: String,
        default: "yy-mm-dd"
    }
})

const model = useVModel(props)
</script>

<template>
    <div class="flex flex-column gap-2 w-full mb-3">
        <label class="text-sm" :for="label">{{ label }}</label>
        <Calendar v-model="model" :dateFormat="dateFormat" showIcon iconDisplay="input" showButtonBar />
    </div>
</template>