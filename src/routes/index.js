import { createRouter, createWebHistory } from "vue-router"

import { useUserStore } from "../store/user"

import auth from "./auth";
import menu from "./menu";
import generarCampaña from "./generar-campaña";
import configuraciones from "./configuraciones";
import datosMaestros from "./datos-maestros";


const routes = [
    ...auth,
    ...menu,
    ...generarCampaña,
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