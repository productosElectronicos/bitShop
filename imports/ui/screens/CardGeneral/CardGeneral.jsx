/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import CardResultado from '../PaginaBusqueda/CardResultado.jsx';

const CardGeneral = ({ titulo, listaOfertas }) => (
  <>
    <Card>
      <CardHeader title={<span style={{ fontSize: '60%' }}>{titulo}</span>} />
      <CardContent>
        <Grid container spacing={2}>
          {listaOfertas.map((oferta) => (
            <Grid item xs={12} md={6}>
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