import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import { Icon } from '@material-ui/core';

const retornoIconos = (nombreIcono) => (
  <Icon style={{
    verticalAlign: 'center',
    marginTop: '-30%',
    fontSize: '30px',
  }}
  >
    <img
      src={`/tiendas/${nombreIcono}.svg`}
      alt=""
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  </Icon>
);
/**
 * Manejo de tiendas disponibles
 * @constant
 * @type {String[]}
 * @default
 */
const TIENDAS_DISPONIBLES = [
  { name: 'Mercado Libre', icon: retornoIconos('ML') },
  { name: 'Amazon', icon: <FontAwesomeIcon icon={faAmazon} style={{ fontSize: '20px' }} /> },
  { name: 'Ebay', icon: <FontAwesomeIcon icon={faEbay} style={{ fontSize: '20px' }} /> },
  { name: 'Olx', icon: retornoIconos('Olx') },
  { name: 'Linio', icon: retornoIconos('Linio') },
  { name: 'Exito', icon: retornoIconos('Exito') },
  { name: 'Falabella', icon: retornoIconos('F') },
];

export default TIENDAS_DISPONIBLES;
