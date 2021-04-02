/* eslint-disable no-undef */
import regexUsadas from '../../../commons/regexUsadas';
/**
 * @typedef Entrada
 * @property {String} username correo del usuario
 * @property {String} password contraseña
 * @property {String} name nombre
 */

/**
 * función para crear la cuenta de un usuario
 * @param {Entrada} entrada
 * @returns {Promise<String>} id mongo del usuario creado
 */
export const crearUsuario = ({
  username, password, name,
}) => new Promise((resolve, reject) => Accounts.createUser({
  username,
  email: username,
  password,
  profile: { name },
},
(error, result) => {
  if (error) {
    reject(error);
  } else {
    resolve(result);
  }
}));

/**
 * función que retorna si es valido o no continuar con el registro.
 * @param {Entrada} entrada
 * @returns {String | void} mensaje de error del campo que no ingresó
 */
export const noEsValidoRegistrarse = ({
  username, password, name,
}) => {
  if (!name) {
    return 'Debe ingresar un nombre';
  }

  if (!username || !regexUsadas.email.test(username)) {
    return 'Debe ingresar un correo electronico valido';
  }

  if (!password) {
    return 'Debe ingresar una contraseña';
  }

  return false;
};
