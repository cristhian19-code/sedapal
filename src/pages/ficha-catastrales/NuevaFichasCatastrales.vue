<script setup>
import BaseInput from '../../components/input/BaseInput.vue';
import BaseButton from '../../components/button/BaseButton.vue';

import Card from 'primevue/card'
</script>

<template>
    <Card class="mx-auto my-auto" style="width: 500px;">
        <template #content>
            <h1 class="text-center">Nueva plantilla</h1>

            <base-input label="Nombre y Apellidos" />
            <base-input label="Dirección" />
            <base-input label="Referencia" />
            <base-input label="Solcitud de reclamo" />

            <div class="flex justify-content-center mt-5 gap-5">
                <base-button label="Agregar" />
                <base-button severity="danger" label="Cancelar" />
            </div>
        </template>
    </Card>
</template>