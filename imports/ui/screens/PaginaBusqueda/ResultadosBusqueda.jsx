/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardResultado from './CardResultado.jsx';

const ResultadosBusqueda = ({ resultados }) => (
  <>
    <br />
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} />

      <Grid item xs={12} md={9}>
        <Grid container spacing={2}>
          {resultados.map((resultado) => (
            <Grid item xs={12} md={4} key={resultado.nombreProducto}>
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
