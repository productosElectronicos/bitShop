/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Grid from '@material-ui/core/Grid';

// components
import CardResultado from './CardResultado.jsx';
import Filtros from './Filtros.jsx';
import FiltrosOrden from './FiltrosOrden.jsx';

const ResultadosBusqueda = ({ resultados }) => (
  <>
    <br />
    <Grid container>
      <Grid item xs={12}>
        <div textalign="right">
          <FiltrosOrden />
        </div>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        <Filtros />
      </Grid>
      <Grid item xs={12} md={10}>
        <Grid container spacing={2}>
          {resultados.map((resultado) => (
            <Grid item xs={12} md={3} key={resultado.enlaceProducto}>
              <CardResultado {...resultado} />
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
  </>
);

ResultadosBusqueda.propTypes = {
  resultados: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultadosBusqueda;
