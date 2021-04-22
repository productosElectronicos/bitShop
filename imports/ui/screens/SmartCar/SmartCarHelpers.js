import { Meteor } from 'meteor/meteor';

export const a = 1;

/**
 * @typedef Categoria
 * @property {String} label
 * @property {String} value
 * @property {String[]} categories
 */

/**
 * función para obtener una categoria y sus valores
 * @param {String} value  nombre de la categoria
 * @returns {Categoria}
 */
export const obtenerCategoria = (nombre) => new Promise((resolve, reject) => {
  Meteor.call('obtenerCategoriaPorNombre', { nombre }, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
