import cronogramaActividadesRoutes from "./cronograma-actividades.routes";

export default [
    {
        path: "/",
        component: () => import("../../layouts/DefaultLayout.vue"),
        children: [
            ...cronogramaActividadesRoutes
        ]
    }
]