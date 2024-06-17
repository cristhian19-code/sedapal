<script setup>
import { useUserStore } from "@/store/user";
import Toolbar from "primevue/toolbar";
import Tree from "primevue/tree";

const userStore = useUserStore();

const listMenu = [
  {
    label: "Configuraciones",
    children: [
      {
        label: "Usuarios",
        icon: "pi pi-user",
        name: "Usuarios",
        type: "url",
      },
      {
        label: "Empleados",
        icon: "pi pi-sitemap",
        name: "Empleados",
        type: "url",
      },
      {
        label: "Cargos",
        icon: "pi pi-id-card",
        name: "Cargos",
        type: "url",
      },
      {
        label: "Generos",
        icon: "pi pi-user",
        name: "Generos",
        type: "url",
      },
      {
        label: "Campaña Estado",
        icon: "pi pi-cog",
        name: "CampaniaEstado",
        type: "url",
      },
      {
        label: "Conexion Estado",
        icon: "pi pi-cog",
        name: "ConexionEstado",
        type: "url",
      },
      {
        label: "Conexion Tipo",
        icon: "pi pi-cog",
        name: "ConexionTipo",
        type: "url",
      },
      {
        label: "Direccion Tipo Via",
        icon: "pi pi-cog",
        name: "DireccionTipoVia",
        type: "url",
      },
      {
        label: "Direccion Urbanizacion",
        icon: "pi pi-cog",
        name: "DireccionUrbanizacion",
        type: "url",
      },
      {
        label: "Estado Civil",
        icon: "pi pi-cog",
        name: "EstadoCivil",
        type: "url",
      }
    ],
  },
  {
    label: "Generar Campaña",
  },
  {
    label: "Diseño de Fichas",
  },
  {
    label: "Revisión de Fichas",
  },
];

const getImage = (image) => {
  return new URL(image, import.meta.url).href;
};
</script>

<template>
  <div class="h-screen w-full flex flex-column p-3">
    <Toolbar style="border: none;" class="p-3">
      <template #start>
        <router-link :to="{ name: 'Menu' }">
          <img width="70px" src="../assets/sedapal.svg" alt="" />
        </router-link>
      </template>

      <template #end>
        <h4 class="text-primary my-0">Hola, {{ userStore.user?.username }}</h4>
      </template>
    </Toolbar>
    <div class="h-full flex-grow-1 flex pt-3 gap-3">
      <Tree :value="listMenu" selectionMode="single" :metaKeySelection="false" class="w-full md:w-18rem">
        <template #url="{ node }">
          <router-link style="text-decoration: none" :to="{ name: node.name }">{{ node.label }}</router-link>
        </template>
      </Tree>
      <div class="flex-grow-1 max-w-full overflow-x-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
