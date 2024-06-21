import campañasRoutes from "./campañas.routes.js";
import generarCampaRoutes from "./generar-campaña.routes.js";

export default [
    {
        path: "/",
        component: ()=> import("../../layouts/DefaultLayout.vue"),
        children: [
            ...generarCampaRoutes,
            ...campañasRoutes
        ]
    }
]