import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const InfoGeneralMobile = ({
  estaConectadoUnUsuario,
  anchorEl,
  open,
  handleClose,
}) => {
  const history = useHistory();

  /**
   * Función para re dirigir
   * @param {String} path
   */
  const redireccionARuta = (path) => {
    handleClose();
    history.push(path);
  };

  const botonMiPerfil = estaConectadoUnUsuario
    ? (
      <MenuItem
        onClick={() => redireccionARuta('/perfil')}
      >
        Mi Perfil
      </MenuItem>
    )
    : null;

  const botonBits = estaConectadoUnUsuario
    ? (
      <MenuItem onClick={() => redireccionARuta('/bits_guardados')}>
        Bit Guardados
      </MenuItem>
    )
    : null;

  const alCerrarSesion = () => {
    handleClose();
    Meteor.logout();
  };

  const botonCerrarSesion = estaConectadoUnUsuario
    ? (
      <MenuItem onClick={alCerrarSesion}>
        Cerrar sesión
      </MenuItem>
    )
    : null;

  const botonIniciarSesion = !estaConectadoUnUsuario
    ? (
      <MenuItem onClick={() => redireccionARuta('/inicio-sesion')}>
        Iniciar Sesión
      </MenuItem>
    )
    : null;
  return (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {botonMiPerfil}
        {botonBits}
        {botonCerrarSesion}
        {botonIniciarSesion}
      </Menu>
    </>
  );
};

InfoGeneralMobile.defaultProps = {
  anchorEl: null,
};

InfoGeneralMobile.propTypes = {
  estaConectadoUnUsuario: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InfoGeneralMobile;
