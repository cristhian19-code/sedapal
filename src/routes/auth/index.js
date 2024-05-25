import authRoutes from "./auth.routes.js";

export default [
    {
        path: "/",
        component:()=>  import("../../layouts/DefaultLayout.vue"),
        children: [
            ...authRoutes
        ]
    }
]