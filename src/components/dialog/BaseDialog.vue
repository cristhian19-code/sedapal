<script setup>
import { useVModel } from '../../composables/useVmodel';

import BaseButton from '../button/BaseButton.vue';
import Dialog from 'primevue/dialog';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    hideActions: {
        type: Boolean,
        default: false
    },
    textLabelNo: {
        type: String,
        default: "NO"
    },
    textLabelYes: {
        type: String,
        default: "SI"
    },
    title: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(['confirm'])

const model = useVModel(props)

const onConfirm = () => {
    emit('confirm')
}
</script>

<template>
    <Dialog v-model:visible="model" modal :header="props.title" :style="{ width: '50rem' }">
        <slot></slot>
        <div v-if="!props.hideActions" class="flex justify-content-end gap-2">
            <base-button :label="props.textLabelNo" severity="secondary" @click="model = false"></base-button>
            <base-button :label="props.textLabelYes" @click="onConfirm"></base-button>
        </div>
    </Dialog>
</template>