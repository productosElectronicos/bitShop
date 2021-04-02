import { Meteor } from 'meteor/meteor';

/**
 * @typedef Entrada
 * @property {String} username correo del usuario
 * @property {String} password contraseña
 */

/**
 * función para iniciar la cuenta de un usuario
 * @param {Entrada} entrada
 * @returns {Promise<String>} id mongo del usuario creado
 */
export const iniciarSesion = ({ username: email, password }) => new Promise((resolve, reject) => {
  Meteor.loginWithPassword(email, password, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

/**
 * función que retorna si es valido o no iniciar sesión.
 * @param {Entrada} entrada
 * @returns {String | void} mensaje de error del campo que no ingresó
*/
export const noEsValidoIniciarSesion = ({ username, password }) => {
  if (!username) {
    return 'Debe ingresar un correo electronico';
  }

  if (!password) {
    return 'Debe ingresar una contraseña';
  }

  return false;
};
