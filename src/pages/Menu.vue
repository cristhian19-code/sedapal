<script setup>
import Card from 'primevue/card'

import {useRouter} from "vue-router";

const router = useRouter();

const listMenu =  [
  {
    title: "Generar Campaña",
    image: "../assets/icons/droplet.svg"
  },
  {
    title: "Diseño de Fichas",
    image: "../assets/icons/document-attachment.svg"
  },
  {
    title: "Revisión de Fichas",
    image: "../assets/icons/file-search.svg"
  }
]

const getImage = (image)=> {
  return new URL(image, import.meta.url).href
}

const goTo = ()=> {
  router.push("/generar-campana")
}
</script>

<template>
<div class="grid mx-auto my-auto gap-3" style="width: 70%">
  <Card @click="goTo" v-for="menu in listMenu" :key="menu.title" class="col cursor-pointer">
    <template #content>
      <div class="text-center">
        <img :src="getImage(menu.image)" loading="lazy" width="50" height="50" alt="">
        <h2>{{menu.title}}</h2>
      </div>
    </template>
  </Card>
</div>
</template>

<style scoped>

</style>