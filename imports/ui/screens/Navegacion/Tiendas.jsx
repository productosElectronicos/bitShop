import { ThemeProvider } from '@material-ui/core/styles';

import React from 'react';

import Button from '@material-ui/core/Button';

import themeSelectores from '../../theme/themeSelectores.js';

/**
 * Manejo de tiendas disponibles
 * @constant
 * @type {String[]}
 * @default
 */
const TIENDAS_DISPONIBLES = [
  'Mercado Libre',
  'Amazon',
  'Ebay',
  'Olx',
  'Linio',
  'Exito',
  'Falabella',
];

const Tiendas = () => (
  <ThemeProvider theme={themeSelectores}>
    <div style={{ textAlign: 'left' }}>
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

    </div>
  </ThemeProvider>
);

export default Tiendas;
