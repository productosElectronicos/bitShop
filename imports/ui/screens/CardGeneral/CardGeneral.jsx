/* eslint-disable react/jsx-props-no-spreading */
import { Random } from 'meteor/random';

import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import CardResultado from '../PaginaBusqueda/CardResultado.jsx';
import SinResultados from '../SinResultados/SinResultados.jsx';
import CargandoPagina from '../CargandoPagina/CargandoPagina.jsx';

const CardGeneral = ({ titulo, listaOfertas, isLoading }) => {
  const componenteResultados = _.isEmpty(listaOfertas)
    ? <SinResultados texto="No se encontró recomendaciones &#128577;" />

    : listaOfertas.map((oferta) => (
      <Grid item xs={12} md={6} key={Random.id()}>
        <CardResultado {...oferta} />
      </Grid>
    ));
  const resultado = isLoading ? <CargandoPagina texto="Cargando Resultados..." /> : componenteResultados;
  return (
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
            {resultado}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

CardGeneral.defaultProps = {
  isLoading: false,
};

CardGeneral.propTypes = {
  titulo: PropTypes.string.isRequired,
  listaOfertas: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
};

export default CardGeneral;
