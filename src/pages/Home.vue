<script setup>
import Card from 'primevue/card'

import BaseInput from "../components/input/BaseInput.vue"
import baseButton from "../components/button/BaseButton.vue"

import {useRouter} from "vue-router";

const router = useRouter();

const goToDashboard = ()=> {
  router.push("/menu")
}
</script>

<template>
  <Card class="mx-auto my-auto" style="width: 500px">
    <template #content>
      <div class="flex flex-column justify-content-end align-items-center">
        <h1 class="text-center">Iniciar Sesión</h1>

        <base-input label="Email"/>
        <base-input label="Contraseña" type="password"/>

        <base-button @click="goToDashboard" label="Ingresar"/>
      </div>

    </template>
  </Card>
</template>