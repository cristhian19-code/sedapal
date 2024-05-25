import menuRoutes from "./menu-inspector.routes.js";

export default [
    {
        path: "/",
        component:()=>  import("../../layouts/DefaultLayout.vue"),
        children: [
            ...menuRoutes
        ]
    }
]