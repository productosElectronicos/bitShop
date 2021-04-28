/* eslint-disable no-console */
import { Meteor } from 'meteor/meteor';

export const a = 1;

/**
 * @typedef SelectOptions
 * @property {String} label
 * @property {String} value
 */

/**
 * función para obtener archivo privado por nombre
 * @param {Object} entrada  objeto con parametros
 * @param {String} entrada.nombre  nombre de el archivo sin .json
 * @param {Boolean} entrada.conFuncionDeParseo si necesita parseo o no
 * @returns {Promise<SelectOptions>}
 */
export const obtenerArchivoPrivado = (entrada) => new Promise((resolve, reject) => {
  Meteor.call('obtenerArchivoPrivado', entrada, (err, result) => {
    if (err) {
      console.error(err);
      reject(err);
    } else {
      resolve(result);
    }
  });
});
