import campaniaEstadoRoutes from "./campania-estado.routes";
import cargosRoutes from "./cargos.routes";
import conexionEstadoRoutes from "./conexion-estado.routes";
import conexionTipoRoutes from "./conexion-tipo.routes";
import direccionTipoViaRoutes from "./direccion-tipo-via.routes";
import direccionUrbanizacionRoutes from "./direccion-urbanizacion.routes";
import empleadosRoutes from "./empleados.routes";
import estadoCivilRoutes from "./estado-civil.routes";
import generosRoutes from "./generos.routes";
import nivelSocioeconomicoRoutes from "./nivel-socioeconomico.routes";
import predioCategoriaRoutes from "./predio-categoria.routes";
import revisionEstadoRoutes from "./revision-estado.routes";
import tipoModificacionesRoutes from "./tipo-modificaciones.routes";
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
            ...direccionTipoViaRoutes,
            ...direccionUrbanizacionRoutes,
            ...estadoCivilRoutes,
            ...nivelSocioeconomicoRoutes,
            ...predioCategoriaRoutes,
            ...revisionEstadoRoutes,
            ...tipoModificacionesRoutes
        ]
    }
]