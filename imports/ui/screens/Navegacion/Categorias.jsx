import { ThemeProvider } from '@material-ui/core/styles';

import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import themeSelectores from '../../theme/themeSelectores.js';

const Categorias = () => (
  <ThemeProvider theme={themeSelectores}>
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="categoria">
        Categoria
      </InputLabel>
      <Select
        labelId="categoria"
        id="categoria"
        value={30}
        onChange={() => null}
        fullWidth
        labelWidth={80}
        style={{ backgroundColor: '#ffffff' }}
      >
        <MenuItem value={10}>Tecnologia</MenuItem>
        <MenuItem value={20}>Videojuegos</MenuItem>
        <MenuItem value={30}>Todas</MenuItem>
      </Select>
    </FormControl>
  </ThemeProvider>
);

export default Categorias;
