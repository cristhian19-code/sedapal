<script setup>
import { useUserStore } from "@/store/user";
import Toolbar from "primevue/toolbar";
import Tree from "primevue/tree";
import BaseButton from "@/components/button/BaseButton.vue";
import { useRouter } from "vue-router";
import { ref } from 'vue'
import Menu from "primevue/menu";
import { listMenu } from "@/constants/menu";

const userStore = useUserStore();
const router = useRouter();
const pos = ref(null);

const signOut = () => {
  userStore.signOut();
  router.push({ name: "Home" });
};

const onSelectedOption = (event) => {
  router.push({ name: event.name });
};
</script>

<template>
  <div class="h-screen w-full flex flex-column p-3">
    <Toolbar class="p-3 border-black-alpha-20">
      <template #start>
        <router-link :to="{ name: 'Menu' }">
          <img width="70px" src="../assets/sedapal.svg" alt="" />
        </router-link>
      </template>

      <template #end>
        <h4 class="text-primary my-0">Hola, {{ userStore.user?.username }}</h4>
        <base-button class="ml-2" severity="danger" @click="signOut" icon="pi pi-sign-out" />
      </template>
    </Toolbar>
    <div class="h-full flex-grow-1 flex pt-3 gap-3">
      <Menu v-model="pos" :model="listMenu" class="overflow-auto h-full" style="width: 400px">
        <template #submenuheader="{ item }">
          <span class="text-primary font-bold">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
          <a v-ripple class="pl-5 flex align-items-center" v-bind="props.action" @click="onSelectedOption(item)">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </template>
      </Menu>
      <div class="flex-grow-1 w-full overflow-x-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
