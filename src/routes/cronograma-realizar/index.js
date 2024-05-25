import cronogramaRealizarRoutes from "./cronograma-realizar.routes";

export default [
    {
        path: "/",
        component: () => import("../../layouts/DefaultLayout.vue"),
        children: [
            ...cronogramaRealizarRoutes
        ]
    }
]