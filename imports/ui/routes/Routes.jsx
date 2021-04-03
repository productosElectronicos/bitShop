import {
  Route,
  Switch,
  useLocation,
  Redirect,
  withRouter,
} from 'react-router-dom';

import React, { Suspense } from 'react';

import { getPublicRoutes, getPrivateRoutes } from './routes';

import PublicComponent from './PublicComponent.jsx';
import PrivateComponent from './PrivateComponent.jsx';

import PaginaSuspendida from '../screens/PaginaSuspendida/PaginaSuspendida.jsx';
import Navegacion from '../screens/Navegacion/Navegacion.jsx';

// public and private pages
const publicPages = getPublicRoutes().map((route) => route.path);
const privatePages = getPrivateRoutes().map((route) => route.path);

// function to redirect page
const privateRouteComponent = (component, path) => (
  <PrivateComponent
    key={path}
    path={path}
    component={withRouter(component)}
    exact
  />
);

// function to redirect page
const publicRouteComponent = (component, path) => (
  <PublicComponent
    key={path}
    path={path}
    component={withRouter(component)}
    exact
  />
);

const Routes = () => {
  const location = useLocation();
  return (
    <Switch>

      {/* Public routes */}
      <Route
        path={publicPages}
        exact
      >
        <Suspense fallback={<PaginaSuspendida />}>

          <Switch location={location} key={location.pathname}>
            {getPublicRoutes()
              .map(({ component, path }) => publicRouteComponent(component, path))}
          </Switch>
        </Suspense>
      </Route>

      {/* Privare routes */}
      <Route
        path={privatePages}
        exact
      >
        <Navegacion>
          <Suspense fallback={<PaginaSuspendida />}>
            <Switch>
              {getPrivateRoutes()
                .map(({ component, path }) => privateRouteComponent(component, path))}
            </Switch>
          </Suspense>
        </Navegacion>
      </Route>

      <Redirect to="/" />

    </Switch>

  );
};

export default Routes;
