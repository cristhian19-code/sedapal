export default [
    {
        path: "menu-inspector",
        component: () => import("../../pages/menu-inspector/MenuInspector.vue")
    },
    {
        path: "menu-inspector/actualizar-datos",
        component: () => import("../../pages/menu-inspector/ActualizarDatos.vue")
    },
    {
        path: "menu-inspector/registro-consumidor",
        component: () => import("../../pages/menu-inspector/RegistroConsumidor.vue")
    }
]