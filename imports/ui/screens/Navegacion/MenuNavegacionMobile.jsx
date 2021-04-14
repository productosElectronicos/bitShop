import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import AvatarImagen from './AvatarImagen.jsx';
import Categorias from './Categorias.jsx';

const TIENDAS_DISPONIBLES = [
  'Mercado Libre',
  'Amazon',
  'Ebay',
  'Olx',
  'Linio',
  'Exito',
  'Falabella',
];

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.background.default,
    width: 200,
    flexShrink: 0,
  },
  divTamano: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tamanoSelect: {
    width: '70%',
  },

}));

const MenuNavegacionMobile = ({ abrirMenu, setAbrirMenu }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="left"
      open={abrirMenu}
      onClose={() => setAbrirMenu(false)}
      onOpen={() => setAbrirMenu(true)}
      classes={{ paper: classes.paper }}
    >
      <AvatarImagen />

      <div className={classes.divTamano}>
        <div className={classes.tamanoSelect}>
          <Categorias />
        </div>
      </div>

      <br />
      <div className={classes.divTamano}>
        <div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Tiendas
            </Typography>
          </div>

          <ButtonGroup size="small" orientation="vertical">
            {TIENDAS_DISPONIBLES.map((tienda) => (
              <Button
                size="small"
                variant="outlined"
                key={tienda}
                style={{ background: '#ffffff' }}
              >
                {tienda}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

MenuNavegacionMobile.propTypes = {
  abrirMenu: PropTypes.bool.isRequired,
  setAbrirMenu: PropTypes.func.isRequired,
};

export default MenuNavegacionMobile;
