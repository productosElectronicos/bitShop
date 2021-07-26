/**
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

import _ from 'lodash';

/**
 * @param {object} entrada
 * @param {String} entrada.texto limite de resultados
 * @param {Number|undefined} entrada.limit limite de resultados
 * @returns {Resultado[]}
 */

const obtenerResultadosFalabella = async ({ texto, limit = 25 }) => {
  const { URL_BASE_FALABELLA } = process.env;

  const url = `${URL_BASE_FALABELLA}/falabella/${limit}?buscar=${texto}`;

  try {
    const llamado = await (fetch(url));

    if (llamado.status >= 500) {
      // eslint-disable-next-line no-console
      console.log('error al consumir datos de amazon. Estatus code: ', llamado.status);
      return [];
    }

    const resultado = await llamado.json();

    return _.flattenDeep(resultado);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export default obtenerResultadosFalabella;
