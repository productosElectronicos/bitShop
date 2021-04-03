import { lazy } from 'react';

const Dashboard = lazy(() => import('../screens/Inicio/Dashboard'));
const InicioSesion = lazy(() => import('../screens/InicioSesion/InicioSesion'));
const Registro = lazy(() => import('../screens/Registro/Registro'));
const Perfil = lazy(() => import('../screens/Perfil/Perfil'));
const BitsGuardados = lazy(() => import('../screens/BitsGuardados/BitsGuardados'));

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
  {
    path: '/perfil',
    component: Perfil,
    isPublic: false,
  },

  {
    path: '/bits_guardados',
    component: BitsGuardados,
    isPublic: false,
  },

];

export const getPublicRoutes = () => ROUTES.filter((route) => route.isPublic);

export const getPrivateRoutes = () => ROUTES.filter((route) => !route.isPublic);
