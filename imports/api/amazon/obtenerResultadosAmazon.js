/* eslint-disable no-console */
import _ from 'lodash';
import { fetch } from 'meteor/fetch';

import convertirPreciosAPesos from '../conversorPeso/conversor';
import obtenerValorPesoADolar from '../conversorPeso/obtenerValorDolar';

/**
 * enlace de búsqueda de amazon
 * @constant
 * @type {String}
 * @default
 */

/**
 *
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} fotoProducto
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * Función para hacer web scraping de amazon con un texto de búsqueda
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number} entrada.limit
 * @returns {Resultado[]}
 */
const obtenerResultadosAmazon = async ({ texto, limit = 10 }) => {
  const { URL_BASE_AMAZON } = process.env;

  const url = `${URL_BASE_AMAZON}/amazon/${limit}?buscar=${texto}`;

  try {
    const llamado = await (fetch(url));

    if (llamado.status >= 500) {
      console.log('error al consumir datos de amazon. Estatus code: ', llamado.status);
      return [];
    }

    const resultado = await llamado.json();

    const resultadoFlatten = _.flattenDeep(resultado);

    const valorDolar = await obtenerValorPesoADolar();

    return resultadoFlatten.map(convertirPreciosAPesos(valorDolar));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export default obtenerResultadosAmazon;
