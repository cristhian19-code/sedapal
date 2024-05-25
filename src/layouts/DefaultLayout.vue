<script setup>
import Toolbar from 'primevue/toolbar'
</script>

<template>
<div class="h-screen w-full flex flex-column">
  <Toolbar>
    <template #start>
      <img width="100px" src="../assets/sedapal.svg" alt="">
    </template>
  </Toolbar>
  <div class="h-full flex-grow-1 flex">
    <router-view />
  </div>
</div>
</template>

<style scoped>

</style>