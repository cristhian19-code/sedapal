export default [
    {
        path: "",
        name: "Home",
        component: ()=> import("../../pages/Home.vue"),
        meta: {
            pageAuth: true
        }
    }
]