import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import React from 'react';

import Button from '@material-ui/core/Button';

import TIENDAS_DISPONIBLES from '../Tiendas/BotonesTiendas.jsx';

const useStyles = makeStyles((theme) => ({
  contenedor: {
    textAlign: 'left',
  },

  botonNoSeleccionado: {
    background: '#ffffff',
    textTransform: 'capitalize',
  },
}));

const Tiendas = () => {
  const classes = useStyles();
  return (
    <div className={classes.contenedor}>
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
    </div>
  );
};

export default Tiendas;
