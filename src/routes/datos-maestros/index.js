import clientesRoutes from "./clientes.routes";
import conexionRoutes from "./conexion.routes";
import prediosRoutes from "./predios.routes";

export default [
    {
        path: "/datos-maestros",
        component:()=>  import("../../layouts/DefaultLayout.vue"),
        children: [
            ...clientesRoutes,
            ...prediosRoutes,
            ...conexionRoutes
        ]
    }
]