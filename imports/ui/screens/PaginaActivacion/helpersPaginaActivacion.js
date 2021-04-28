import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

/**
 * @typedef Entrada
 * @property {String} token token del usuario
 * @property {String} password contraseña del usuario
 * @property {String} username correo del usuario
*/
/**
 * @typedef RetornoValidarToken
 * @property {String} username correo del usuario
 * @property {Boolean} existeElToken indica si existe o no el token
 */

/**
 * función para indentificar si un token es valido o no
 * @param {String} token
 * @returns {Promise<RetornoValidarToken>}
 */
export const validarToken = (token) => new Promise((resolve, reject) => {
  Meteor.call('validarToken', { token }, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

/**
 * función para activar la cuenta del usuario
 * @param {Entrada} entrada
 * @returns {Promise<>}
 */
export const activarCuenta = ({ token, password, username }) => new Promise(
  (resolve, reject) => Accounts.resetPassword(token, password,
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        Meteor.loginWithPassword(username, password);
        resolve(result);
      }
    }),
);
