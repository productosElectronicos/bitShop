import _ from 'lodash';
import { lazy } from 'react';

const Dashboard = lazy(() => import('../screens/Inicio/Dashboard'));
const InicioSesion = lazy(() => import('../screens/InicioSesion/InicioSesion'));
const Registro = lazy(() => import('../screens/Registro/Registro'));
const Perfil = lazy(() => import('../screens/Perfil/Perfil'));
const BitsGuardados = lazy(() => import('../screens/BitsGuardados/BitsGuardados'));
const PaginaBusqueda = lazy(() => import('../screens/PaginaBusqueda/PaginaBusqueda'));
const PaginaActivacion = lazy(() => import('../screens/PaginaActivacion/PaginaActivacion'));
const ComparaBits = lazy(() => import('../screens/ComparaBits/ComparaBits'));
const SmartCar = lazy(() => import('../screens/SmartCar/SmartCar'));
const SmartCarAyuda = lazy(() => import('../screens/SmartCar/SmartCarAyuda'));

export const ROUTES = [
  {
    path: '/inicio-sesion',
    component: InicioSesion,
    isPublic: true,
  },
  {
    path: '/verificar-cuenta/:token',
    component: PaginaActivacion,
    isPublic: true,
  },
  {
    path: '/registro',
    component: Registro,
    isPublic: true,
  },
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/compara-bits',
    component: ComparaBits,
  },
  {
    path: '/smart-car',
    component: SmartCarAyuda,
  },
  {
    path: '/smart-car/:value',
    component: SmartCar,
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
  {
    path: '/busqueda/:id',
    component: PaginaBusqueda,
  },
];

export const getPublicRoutes = () => ROUTES.filter((route) => route.isPublic);

export const getPrivateRoutes = () => ROUTES.filter((route) => !route.isPublic);

export const getCommonRoutes = () => ROUTES.filter((route) => _.isNil(route.isPublic));
