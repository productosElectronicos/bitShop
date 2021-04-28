/* eslint-disable no-console */
import { fetch } from 'meteor/fetch';

import convertirPreciosAPesos from '../conversorPeso/conversor';
import obtenerValorPesoADolar from '../conversorPeso/obtenerValorDolar';

/**
 * enlace de búsqueda de amazon
 * @constant
 * @type {String}
 * @default
 */
// ESTO DEBE DE SER UNA VARIABLE DE ENTORNO
// const URL_BASE = 'https://web-scraping-bitshop.herokuapp.com';
const URL_BASE = 'http://localhost:4000/amazon/array';

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
const obtenerResultadosAmazonArray = async ({ listaABuscar, limit = 10 }) => {
  const body = { listaABuscar, limite: limit };
  try {
    const llamado = await (fetch(URL_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }));

    if (llamado.status >= 500) {
      console.log('error al consumir datos de amazon. Estatus code: ', llamado.status);
      return [];
    }

    const resultado = await llamado.json();

    const valorDolar = await obtenerValorPesoADolar();

    return resultado.map((iterador) => {
      const { texto, resultados } = iterador;
      const resultadosParseados = resultados.map(convertirPreciosAPesos(valorDolar));
      return {
        texto, resultados: resultadosParseados,
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export default obtenerResultadosAmazonArray;
