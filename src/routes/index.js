import {createRouter, createWebHistory} from "vue-router"

import auth from "./auth";
import menu from "./menu";
import generarCampaña from "./generar-campaña";
import fichasCatastrales from "./fichas-catastrales";
import cronogramaActividades from "./cronograma-actividades";
import revisionCronograma from "./revision-cronograma";
import cronogramaRealizar from "./cronograma-realizar";
import menuInspector from "./menu-inspector";

const routes = [
    ...auth,
    ...menu,
    ...generarCampaña,
    ...fichasCatastrales,
    ...cronogramaActividades,
    ...revisionCronograma,
    ...cronogramaRealizar,
    ...menuInspector
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router