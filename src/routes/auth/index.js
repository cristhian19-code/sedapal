import authRoutes from "./auth.routes.js";

export default [
    {
        path: "/",
        component:()=>  import("../../layouts/AuthLayout.vue"),
        children: [
            ...authRoutes
        ]
    }
]