<script setup>
import Card from 'primevue/card'

import { useRouter } from "vue-router";

const router = useRouter();

const listMenu = [
  {
    title: "Registro consumidor",
    image: "../../assets/icons/document-attachment.svg"
  },
  {
    title: "Actualizar datos del consumidor",
    image: "../../assets/icons/document-attachment.svg"
  },
]

const getImage = (image) => {
  return new URL(image, import.meta.url).href
}

const goTo = () => {
  router.push("/actualizar-datos")
}
</script>

<template>
  <div class="grid mx-auto my-auto gap-3" style="width: 70%">
    <Card @click="goTo" v-for="menu in listMenu" :key="menu.title" class="col cursor-pointer">
      <template #content>
        <div class="text-center">
          <img :src="getImage(menu.image)" loading="lazy" width="50" height="50" alt="">
          <h2>{{ menu.title }}</h2>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>