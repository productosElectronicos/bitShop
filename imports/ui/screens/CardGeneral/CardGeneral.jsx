/* eslint-disable react/jsx-props-no-spreading */
import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import CardResultado from '../PaginaBusqueda/CardResultado.jsx';
import SinResultados from '../SinResultados/SinResultados.jsx';

const CardGeneral = ({ titulo, listaOfertas }) => (
  <>
    <Card>
      <CardHeader
        title={(
          <span style={{ fontSize: '60%' }}>
            <b>{titulo}</b>
          </span>
        )}
      />
      <CardContent>
        <Grid container spacing={2}>
          {_.isEmpty(listaOfertas)
            ? <SinResultados texto="No se encontró recomendaciones &#128577;" />

            : listaOfertas.map((oferta) => (
              <Grid item xs={12} md={6} key={oferta.nombreProducto}>
                <CardResultado {...oferta} />
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  </>
);
CardGeneral.propTypes = {
  titulo: PropTypes.string.isRequired,
  listaOfertas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardGeneral;
