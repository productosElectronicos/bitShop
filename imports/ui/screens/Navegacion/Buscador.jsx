import { ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import React, { useState } from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// material ui icons
import Search from '@material-ui/icons/Search';

import { transformarTexto } from '../../../commons/utilidades.js';

import themeSelectores from '../../theme/themeSelectores.js';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  /**
   * función para redirigir a la ruta
   * @param {String} texto
   */
  const redireccionABuscar = (texto) => {
    const ruta = transformarTexto({
      nuevoSeparador: '+',
      separador: ' ',
      texto,
    });
    history.push(ruta);
  };

  const alBuscar = () => {
    if (!busqueda) {
      enqueueSnackbar('Por favor ingrese una palabra para buscar', {
        variant: 'error',
      });
      return;
    }
    redireccionABuscar(`/busqueda/${busqueda}`);
  };

  return (
    <ThemeProvider theme={themeSelectores}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-busqueda">
          Busca tu producto aquí
        </InputLabel>
        <OutlinedInput
          required
          fullWidth
          type="text"
          id="outlined-adornment-busqueda"
          value={busqueda}
          autoFocus
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ backgroundColor: '#ffffff' }}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={alBuscar}
                edge="end"
                type="submit"
                color="primary"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          )}
          labelWidth={180}
        />
      </FormControl>
    </ThemeProvider>
  );
};

export default Buscador;
