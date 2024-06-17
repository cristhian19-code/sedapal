<script setup>
import InputNumber from 'primevue/inputnumber'
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
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    useGrouping: {
        type: Boolean,
        default: false,
    }
})

const model = useVModel(props)
</script>

<template>
    <div class="flex flex-column gap-2 w-full mb-3">
        <label class="text-sm" :for="label">{{ label }}</label>
        <InputNumber v-model="model" :inputId="label" :min="min" :max="max" :useGrouping="useGrouping" />
        <!--    <small id="username-help">Enter your username to reset your password.</small>-->
    </div>
</template>

<style scoped></style>