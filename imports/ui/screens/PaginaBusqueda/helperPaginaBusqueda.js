import { Meteor } from 'meteor/meteor';

/**
 * @typedef Ordenamiento
 * @property {String} campo
 * @property {String} orden
 */

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
 * función para que a partir de un texto se obtenga el resultado de búsqueda
 * @param {Object} entrada
 * @param {String} entrada.texto texto a buscar
 * @param {Number} entrada.limit cantidad de elementos a filtrar
 * @param {Ordenamiento} entrada.ordenarPor
 * @returns {Promise<Resultado[]>}
 */
export const obtenerTodosLosResultados = (entrada) => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerTodosLosResultados',
    entrada,
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
 *
 * @typedef ProductoGuardado
 * @property {String} productoId
 * @property {String} tienda
 * @property {String} enlaceProducto
*/

/**
 * función para crear elemento visto
 * @param {ProductoGuardado} producto
 * @returns {Promise<String>} id producto visto en db
 */
export const crearElementoVisto = (producto) => new Promise(
  (resolve, reject) => Meteor.call(
    'crearElementoVisto',
    { producto },
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    },
  ),
);
