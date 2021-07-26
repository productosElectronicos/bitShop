import _ from 'lodash';

/**
 *
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * @param {Number|undefined} limit limite de resultados
 * @returns {Resultado[]}
 */
const obtenerResultadosLinio = async({ limit = 10, texto }) => {
  const { URL_BASE_LINIO } = process.env;

  const url = `${URL_BASE_LINIO}/linio/${limit}?buscar=${texto}`;

  try {
    const llamado = await (fetch(url));

    if (llamado.status >= 500) {
      // eslint-disable-next-line no-console
      console.log('error al consumir datos de linio. Estatus code: ', llamado.status);
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

export default obtenerResultadosLinio;
