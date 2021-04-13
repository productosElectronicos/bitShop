import { Meteor } from 'meteor/meteor';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import InfoGeneralEstilos from './InfoGeneralEstilos.jsx';
import themeSelectores from '../../theme/themeSelectores.js';

const InfoGeneral = ({ classes, estaConectadoUnUsuario }) => {
  const history = useHistory();

  /**
   * Función para re dirigir
   * @param {String} path
   */
  const redireccionARuta = (path) => {
    history.push(path);
  };

  const botonMiPerfil = estaConectadoUnUsuario
    ? (
      <Button className={classes.boton} onClick={() => redireccionARuta('/perfil')}>
        Mi Perfil
      </Button>
    )
    : null;

  const botonBits = estaConectadoUnUsuario
    ? (
      <Button className={classes.boton} onClick={() => redireccionARuta('/bits_guardados')}>
        Bit Guardados
      </Button>
    )
    : null;

  const alCerrarSesion = () => {
    Meteor.logout();
  };

  const botonCerrarSesion = estaConectadoUnUsuario
    ? (
      <Button className={classes.boton} onClick={alCerrarSesion}>
        Cerrar sesión
      </Button>
    )
    : null;

  const botonIniciarSesion = !estaConectadoUnUsuario
    ? (
      <Button className={classes.boton} onClick={() => redireccionARuta('/inicio-sesion')}>
        Iniciar Sesión
      </Button>
    )
    : null;

  return (
    <ThemeProvider theme={themeSelectores}>
      <div className={classes.divAlign}>
        <ButtonGroup size="small" orientation="vertical">
          {botonMiPerfil}
          {botonBits}
          {botonCerrarSesion}
          {botonIniciarSesion}
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
};

InfoGeneral.propTypes = {
  estaConectadoUnUsuario: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(InfoGeneralEstilos)(InfoGeneral);
