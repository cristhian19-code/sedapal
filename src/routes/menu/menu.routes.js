export default [
    {
        path: "menu",
        name: "Menu",
        component: ()=> import("../../pages/Menu.vue"),
        meta: {
            requireAuth: true
        }
    }
]