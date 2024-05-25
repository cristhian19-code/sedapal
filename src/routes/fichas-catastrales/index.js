import fichasCatastrales from "./fichas-catastrales.routes.js";

export default [
    {
        path: "/",
        component: () => import("../../layouts/DefaultLayout.vue"),
        children: [
            ...fichasCatastrales
        ]
    }
]