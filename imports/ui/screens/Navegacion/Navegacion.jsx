/* eslint-disable react/jsx-props-no-spreading */
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';

import NavegacionEstilos from './NavegacionEstilos.jsx';
import Buscador from './Buscador.jsx';
import Categorias from './Categorias.jsx';
import RegresarComponente from './RegresarComponente.jsx';
import AvatarImagen from './AvatarImagen.jsx';
import Tiendas from './Tiendas.jsx';
import InfoGeneral from './InfoGeneral.jsx';
import Ofertas from './Ofertas.jsx';
import NavegacionMobile from './NavegacionMobile.jsx';

const Navegacion = ({ children, classes, ...props }) => {
  // obtenemos el id mongo del usuario autenticado

  const { estaConectadoUnUsuario } = useTracker(() => {
    // verificamos el usuario
    const usuarioId = Meteor.userId();

    // agregamos un booleano que define el cambio
    const estaConectado = !!usuarioId;

    return {
      estaConectadoUnUsuario: estaConectado,
    };
  });

  // obtenemos la resolucion actual de pantalla
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });

  const esComputador = isDesktopOrLaptop || isBigScreen;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {esComputador
              ? (
                <>
                  {/* Icon */}
                  <Grid item xs={12} md={1}>
                    <AvatarImagen />
                  </Grid>

                  {/* Buscador */}
                  <Grid item xs={12} md={7}>

                    <Grid container spacing={2}>

                      <Grid item xs={12}>

                        {/* Categorias */}
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <Categorias />
                          </Grid>

                          {/* Buscador */}
                          <Grid item xs={12} md={9}>
                            <Buscador />
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        <Tiendas />
                      </Grid>

                    </Grid>

                  </Grid>

                  {/* Ofertas */}
                  <Grid item xs={12} md={3} style={{ marginTop: '-1%' }}>
                    <Ofertas />
                  </Grid>

                  {/* Info General */}
                  <Grid item xs={12} md={1}>
                    <InfoGeneral estaConectadoUnUsuario={estaConectadoUnUsuario} />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </>
              )
              : <NavegacionMobile estaConectadoUnUsuario={estaConectadoUnUsuario} />}
          </Grid>

        </Grid>
        <Grid item xs={12}>
          <br />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>

        <RegresarComponente {...props} />
      </Grid>
    </>
  );
};

Navegacion.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(NavegacionEstilos)(Navegacion);
