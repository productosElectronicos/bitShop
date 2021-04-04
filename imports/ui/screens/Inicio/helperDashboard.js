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
 * @param {('obtenerResultadosFalabella'|'obtenerResultadosLinio'|'obtenerResultadosExito')} entrada.metodo limite de resultados a presentar
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
