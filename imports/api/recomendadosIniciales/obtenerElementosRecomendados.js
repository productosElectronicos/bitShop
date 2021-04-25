import obtenerTodosLosResultados from '../buscador/obtenerTodosLosResultados';

/**
 *
 * @typedef Producto
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
 * función para obtener productos más varatos de tu ultima palabra buscada
 * @param {Number} limit
 * @returns {Promise<Producto[]>}
 */

const obtenerElementosRecomendados = async ({ limit = 4, texto }) => {
  const resultados = await obtenerTodosLosResultados({ texto });
  return resultados.slice(0, limit);
};

export default obtenerElementosRecomendados;
