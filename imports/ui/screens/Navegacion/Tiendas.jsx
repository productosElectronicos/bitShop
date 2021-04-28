import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import React from 'react';

import Button from '@material-ui/core/Button';

import TIENDAS_DISPONIBLES from '../Tiendas/BotonesTiendas.jsx';

const useStyles = makeStyles((theme) => ({
  contenedorIzquierdo: {
    textAlign: 'left',
  },

  contenedorDerecho: {
    float: 'right',
  },

  botonNoSeleccionado: {
    background: '#ffffff',
    textTransform: 'capitalize',
  },

  botonSeleccionado: {
    background: theme.palette.primary.main,
    textTransform: 'capitalize',
  },
}));

const LOCACION_COMPARA_BITS = '/compara-bits';
const LOCACION_SMART_CAR = '/smart-car';

const Tiendas = () => {
  const history = useHistory();
  const classes = useStyles();

  const rutaActual = history.location.pathname;
  const estaEnComparaBits = rutaActual === LOCACION_COMPARA_BITS;
  const estaEnSmartCar = new RegExp(`${LOCACION_SMART_CAR}`).test(rutaActual);

  const redirigir = (ruta) => {
    history.push(ruta);
  };

  return (
    <div className={classes.contenedorIzquierdo}>
      {TIENDAS_DISPONIBLES.map((tienda) => (
        <Button
          size="small"
          variant="outlined"
          key={tienda.name}
          className={classes.botonNoSeleccionado}
          startIcon={tienda.icon}
        >
          {tienda.name}
        </Button>
      ))}
      <span className={classes.contenedorDerecho}>
        <Button
          size="small"
          variant="outlined"
          className={estaEnComparaBits ? classes.botonSeleccionado : classes.botonNoSeleccionado}
          onClick={() => redirigir(LOCACION_COMPARA_BITS)}
        >
          Compara Bits
        </Button>
        <Button
          size="small"
          variant="outlined"
          className={estaEnSmartCar ? classes.botonSeleccionado : classes.botonNoSeleccionado}
          onClick={() => redirigir(LOCACION_SMART_CAR)}
        >
          SmartCar
        </Button>
      </span>
    </div>
  );
};

export default Tiendas;
