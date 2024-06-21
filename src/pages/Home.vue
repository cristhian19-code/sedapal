<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useToast } from "primevue/usetoast";

import Card from "primevue/card";
import Toast from "primevue/toast";

import BaseInput from "../components/input/BaseInput.vue";
import baseButton from "../components/button/BaseButton.vue";

import { $axios } from "../config/axios";

const toast = useToast();
const router = useRouter();
const loading = ref(false);

const entity = ref({
  username: null,
  contrasenia: null,
});

const showError = (message) => {
  toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
}

const login = async () => {
  if (!Boolean(entity.value.username) || !Boolean(entity.value.contrasenia)) return;

  loading.value = true;
  try {
    const { data } = await $axios.post("/login/", entity.value);
    console.log(data);
    await localStorage.setItem("token", JSON.stringify(data.token));

    await router.push({
      name: "Menu",
    });

    // showSuccess(data.status);
  } catch (error) {
    showError(error.response.data.status);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <Toast />
  <Card class="mx-auto my-auto" style="width: 500px">
    <template #content>
      <div class="flex flex-column justify-content-end align-items-center">
        <h1 class="text-center">Iniciar Sesión</h1>
        <!-- {{ entity }} -->
        <base-input v-model="entity.username" label="Email" />
        <base-input v-model="entity.contrasenia" label="Contraseña" type="password" />

        <base-button :loading="loading" @click="login" label="Ingresar" />
      </div>
    </template>
  </Card>
</template>
