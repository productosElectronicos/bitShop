/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import React, { useState, useEffect } from 'react';

// material ui core
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import { transformarTexto } from '../../../commons/utilidades';
import { obtenerCategoria } from './SmartCarHelpers';
import SmartCarResultado from './SmartCarResultado.jsx';

// import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  contenedorIzquierdo: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconoTamano: {
    fontSize: '70px',
  },
}));

const SmartCar = () => {
  const classes = useStyles();
  const { value: busquedaSelector = '' } = useParams();

  const [grupoCategorias, setGrupoCategorias] = useState([]);

  const categoriaSeleccionada = transformarTexto({
    nuevoSeparador: ' ',
    separador: '+',
    texto: busquedaSelector,
  });

  const alIniciarComponente = async() => {
    try {
      const dataCategoria = await obtenerCategoria(categoriaSeleccionada);

      setGrupoCategorias(dataCategoria.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    alIniciarComponente().then().catch();
    return () => null;
  }, []);

  return (
    < >
      <div className={classes.contenedorIzquierdo}>
        <Icon className={classes.iconoTamano}>
          <img
            src="/images/Bits.png"
            alt=""
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </Icon>
            &nbsp; &nbsp;
        <Typography variant="h5" gutterBottom>
          Bitie te ayuda a comprar:
          <b>
            {' '}
            {categoriaSeleccionada}
          </b>
        </Typography>

      </div>
      <br />

      <Grid container spacing={2}>

        {grupoCategorias.map((categoria) => (
          <Grid item xs={12} md={3} key={categoria}>
            <SmartCarResultado categoria={categoria} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

SmartCar.propTypes = {

};

export default SmartCar;
