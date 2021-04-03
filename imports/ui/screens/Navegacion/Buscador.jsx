import { ThemeProvider } from '@material-ui/core/styles';

import React, { useState } from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// material ui icons
import Search from '@material-ui/icons/Search';

import themeSelectores from '../../theme/themeSelectores.js';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
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
                onClick={() => null}
                          // onMouseDown={handleMouseDownPassword}
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
