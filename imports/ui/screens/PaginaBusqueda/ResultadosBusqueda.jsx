/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Grid from '@material-ui/core/Grid';

// components
import CardResultado from './CardResultado.jsx';
import Filtros from './Filtros.jsx';

const ResultadosBusqueda = ({ resultados }) => (
  <>
    <br />
    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        <Filtros />
      </Grid>

      <Grid item xs={12} md={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
            {/* <!-- Anuncios busquedas --> */}
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-2286863170591933"
              data-ad-slot="6008623895"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <script>
              (adsbygoogle = window.adsbygoogle || []).push(
              {}
              );
            </script>
          </Grid>
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
