import campaniaEstadoRoutes from "./campania-estado.routes";
import cargosRoutes from "./cargos.routes";
import conexionEstadoRoutes from "./conexion-estado.routes";
import conexionTipoRoutes from "./conexion-tipo.routes";
import empleadosRoutes from "./empleados.routes";
import generosRoutes from "./generos.routes";
import usuariosRoutes from "./usuarios.routes";

export default [
    {
        path: "/configuraciones",
        component:()=>  import("../../layouts/DefaultLayout.vue"),
        children: [
            ...usuariosRoutes,
            ...empleadosRoutes,
            ...cargosRoutes,
            ...generosRoutes,
            ...campaniaEstadoRoutes,
            ...conexionEstadoRoutes,
            ...conexionTipoRoutes,
        ]
    }
]