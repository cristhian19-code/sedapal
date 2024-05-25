import menuRoutes from "./menu.routes.js";

export default [
    {
        path: "/",
        component:()=>  import("../../layouts/DefaultLayout.vue"),
        children: [
            ...menuRoutes
        ]
    }
]