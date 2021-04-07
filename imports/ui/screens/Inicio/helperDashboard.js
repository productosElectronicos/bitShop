/* eslint-disable max-len */
import { Meteor } from 'meteor/meteor';
/**
 * objeto con datos de producto visto
 * @typedef ProductoVisto
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 * @property {String} usuarioId
 * @property {Date} fechaVisualizacion
*/

/**
 * @typedef Busqueda
 * @property {String} _id id mongo del usuario
 * @property {String} usuarioId id mongo del usuario
 * @property {Date} fechaBusqueda fecha en que se consultó la búsqueda
 * @property {String} busqueda busqueda realizada
 */

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
 * función para obtener los últimos productos vistos
 * @param {Object} entrada
 * @param {Number} entrada.limit limite de la consulta
 * @param {Object|undefined} entrada.sort Nota: sort es de la forma { parametroAOrdenar: Number }
 * @returns {Promise<ProductoVisto[]>}
 */
export const obtenerElementosVistos = (entrada) => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerElementosVistos', entrada, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    },
  ),
);

/**
 * función para obtener las recomendaciones por tienda
 * @param {Object} entrada
 * @param {Number} entrada.limit limite de resultados a presentar
 * @param {('obtenerResultadosFalabella'|'obtenerResultadosLinio'|'obtenerResultadosExito'|'obtenerResultadosAmazon')} entrada.metodo limite de resultados a presentar
 * @returns {Promise<Producto[]>}
 */
export const obtenerResultadosPorTienda = ({ limit, metodo }) => new Promise(
  (resolve, reject) => Meteor.call(
    metodo,
    { limit },
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    },
  ),
);

/**
 * función para obtener las n últimas palabra buscadas
 * @param {Number} limit
 * @returns {Promise<Busqueda[]>} últimas n búsquedas realizadas
 */
export const obtenerPalabrasBuscadas = (limit) => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerPalabras', { limit }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    },
  ),
);

/**
 * función para obtener las recomendaciones de mercadolibre
 * @param {Object} entrada
 * @param {Number} entrada.limit limite de resultados a presentar
 * @param {String} entrada.texto texto a buscar
 * @returns {Promise<Producto[]>}
 */
export const obtenerResultadosMercadoLibre = (entrada) => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerResultadosMercadoLibre', entrada,
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    },
  ),
);

/**
 * función para obtener productos más varatos de tu ultima palabra buscada
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number|Null} entrada.limit
 * @returns {Promise<Producto[]>}
 */
export const obtenerElementosRecomendados = (entrada) => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerElementosRecomendados', entrada, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    },
  ),
);
