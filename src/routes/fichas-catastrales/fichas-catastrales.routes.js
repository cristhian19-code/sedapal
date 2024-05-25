export default [
    {
        path: "fichas-catastrales",
        component: () => import("../../pages/ficha-catastrales/FichasCatastrales.vue")
    },
    {
        path: "lista-fichas-catastrales",
        component: () => import("../../pages/ficha-catastrales/ListaFichasCatastrales.vue")
    },
    {
        path: "fichas-catastrales/nuevo",
        component: () => import("../../pages/ficha-catastrales/NuevaFichasCatastrales.vue")
    }
]