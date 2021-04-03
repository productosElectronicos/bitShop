/* eslint-disable react/jsx-props-no-spreading */
import { withStyles } from '@material-ui/core/styles';

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

const Navegacion = ({ children, classes, ...props }) => (
  <>
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={1}>

          {/* Icon */}
          <Grid item xs={12} md={1}>
            <AvatarImagen classes={classes} />
          </Grid>

          {/* Buscador */}
          <Grid item xs={12} md={7}>

            <Grid container spacing={2}>

              <Grid item xs={12}>

                {/* Categorias */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Categorias />
                  </Grid>

                  {/* Buscador */}
                  <Grid item xs={12} md={8}>
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
            <InfoGeneral />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>

      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>

      <RegresarComponente {...props} />
    </Grid>
  </>
);

Navegacion.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(NavegacionEstilos)(Navegacion);
