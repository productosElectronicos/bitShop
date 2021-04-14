import { makeStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// material ui icons
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import Buscador from './Buscador.jsx';
import MenuNavegacionMobile from './MenuNavegacionMobile.jsx';
import InfoGeneralMobile from './InfoGeneralMobile.jsx';

const mobileMenuId = 'menu-navegacion';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    maxHeight: '100%',
  },
  menuButtonRight: {
    marginRight: theme.spacing(2),
  },

  paper: {
    backgroundColor: theme.palette.primary,
    width: 200,
    flexShrink: 0,
  },

}));

const NavegacionMobile = ({ estaConectadoUnUsuario }) => {
  const classes = useStyles();

  const [abrirMenu, setAbrirMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setAbrirMenu(true)}
          >
            <MenuIcon />
          </IconButton>

          <Buscador />

          <IconButton
            aria-label="show more"
            edge="end"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <InfoGeneralMobile
        estaConectadoUnUsuario={estaConectadoUnUsuario}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />

      <MenuNavegacionMobile
        abrirMenu={abrirMenu}
        setAbrirMenu={setAbrirMenu}
      />

    </div>
  );
};

NavegacionMobile.propTypes = {
  estaConectadoUnUsuario: PropTypes.bool.isRequired,
};

export default NavegacionMobile;
