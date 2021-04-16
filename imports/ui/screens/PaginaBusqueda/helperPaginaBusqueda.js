import { Meteor } from 'meteor/meteor';

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
 * @param {String} texto texto a buscar
 * @returns {Promise<Resultado[]>}
 */
export const obtenerTodosLosResultados = (texto) => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerTodosLosResultados',
    { texto },
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
