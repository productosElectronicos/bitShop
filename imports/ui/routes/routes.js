import { lazy } from 'react';

const Dashboard = lazy(() => import('../screens/Inicio/Dashboard'));
const InicioSesion = lazy(() => import('../screens/InicioSesion/InicioSesion'));
const Registro = lazy(() => import('../screens/Registro/Registro'));

export const ROUTES = [
  {
    path: '/',
    component: InicioSesion,
    isPublic: true,
  },
  {
    path: '/registro',
    component: Registro,
    isPublic: true,
  },
  {
    path: '/inicio',
    component: Dashboard,
    isPublic: false,

  },
];

export const getPublicRoutes = () => ROUTES.filter((route) => route.isPublic);

export const getPrivateRoutes = () => ROUTES.filter((route) => !route.isPublic);
