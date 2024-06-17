<script setup>
import Card from "primevue/card";

import { useRouter } from "vue-router";

const router = useRouter();

const goTo = () => {
  router.push("/generar-campana");
};
</script>

<template>
  <div class="grid mx-auto my-auto gap-3" style="width: 70%"></div>
</template>

<style scoped></style>
