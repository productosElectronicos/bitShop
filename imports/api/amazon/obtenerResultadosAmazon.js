import { fetch } from 'meteor/fetch';

/**
 * enlace de búsqueda de amazon
 * @constant
 * @type {String}
 * @default
 */
// ESTO DEBE DE SER UNA VARIABLE DE ENTORNO
const URL_BASE = 'https://web-scraping-bitshop.herokuapp.com';

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
  const url = `${URL_BASE}/amazon/${texto}/${limit}`;

  try {
    const llamado = await (fetch(url));

    const resultado = await llamado.json();

    return resultado;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default obtenerResultadosAmazon;
