import Dashboard from "../pages/dashboard";
import Usuarios from "../pages/usuarios";

import { routesProps } from "./interface";


export const routes: routesProps[] = [
    {
        id: 0,
        path: '/dashboard',
        component: Dashboard,
    },
    {
        id: 1,
        path: '/usuarios',
        component: Usuarios,
    }
];