import { createRouter, createWebHistory } from "vue-router"

import auth from "./auth";
import menu from "./menu";
import generarCampaña from "./generar-campaña";
import fichasCatastrales from "./fichas-catastrales";
import cronogramaActividades from "./cronograma-actividades";
import revisionCronograma from "./revision-cronograma";
import cronogramaRealizar from "./cronograma-realizar";
import menuInspector from "./menu-inspector";

import { useUserStore } from "../store/user"
import configuraciones from "./configuraciones";

import datosMaestros from "./datos-maestros";


const routes = [
    ...auth,
    ...menu,
    ...generarCampaña,
    ...fichasCatastrales,
    ...cronogramaActividades,
    ...revisionCronograma,
    ...cronogramaRealizar,
    ...menuInspector,
    ...configuraciones,
    
    // 
    ...datosMaestros,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    
    const token = await  JSON.parse(localStorage.getItem("token"));
    
    await userStore.getDataByToken(token)

    if (Boolean(userStore.user) && to.meta.pageAuth) {
        next({ name: "Menu" })
    } else if(!Boolean(userStore.user) && to.meta.requireAuth) {
        next({ name: "Home" })
    } else {
        next()
    }
})

export default router