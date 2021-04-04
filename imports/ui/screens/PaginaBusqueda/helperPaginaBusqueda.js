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
 *
 * @param {String} texto
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

export const a = 1;
