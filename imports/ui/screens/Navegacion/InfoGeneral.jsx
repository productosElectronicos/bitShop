/* eslint-disable react/prop-types */
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';

import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import InfoGeneralEstilos from './InfoGeneralEstilos.jsx';
import themeSelectores from '../../theme/themeSelectores.js';

const InfoGeneral = ({ classes }) => {
  const history = useHistory();

  /**
   * Función para re dirigir
   * @param {String} path
   */
  const redireccionAPerfil = (path) => {
    history.push(path);
  };

  return (
    <ThemeProvider theme={themeSelectores}>
      <div className={classes.divAlign}>

        <ButtonGroup size="small" orientation="vertical">
          <Button className={classes.boton} onClick={() => redireccionAPerfil('/perfil')}>
            Mi Perfil
          </Button>
          <Button className={classes.boton} onClick={() => redireccionAPerfil('/bits_guardados')}>
            Bit Guardados
          </Button>
          <Button className={classes.boton} onClick={() => Meteor.logout()}>
            Cerrar sesión
          </Button>

        </ButtonGroup>
      </div>
    </ThemeProvider>

  );
};

export default withStyles(InfoGeneralEstilos)(InfoGeneral);
