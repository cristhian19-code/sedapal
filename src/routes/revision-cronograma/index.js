import revisionCronogramaRoutes from "./revision-cronograma.routes";

export default [
    {
        path: "/",
        component: () => import("../../layouts/DefaultLayout.vue"),
        children: [
            ...revisionCronogramaRoutes
        ]
    }
]