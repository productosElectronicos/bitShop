/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from '@material-ui/core/styles';

import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import RegresarAInicio from '../RegresarAInicio/RegresarAInicio.jsx';
import themeSelectores from '../../theme/themeSelectores.js';

const RegresarComponente = (props) => (
  <RegresarAInicio {...props}>
    <ThemeProvider theme={themeSelectores}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon color="primary" />
      </Fab>
    </ThemeProvider>
  </RegresarAInicio>
);

export default RegresarComponente;
