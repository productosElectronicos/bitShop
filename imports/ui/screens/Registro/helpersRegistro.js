/* eslint-disable no-undef */
import _ from 'lodash';

import regexUsadas from '../../../commons/regexUsadas';
/**
 * @typedef Entrada
 * @property {String} username correo del usuario
 * @property {String[]} gustos gustos del usuario
 * @property {String} name nombre
 */

/**
 * función para crear la cuenta de un usuario
 * @param {Entrada} entrada
 * @returns {Promise<String>} id mongo del usuario creado
 */
export const crearUsuario = ({
  username, gustos, name,
}) => new Promise((resolve, reject) => Meteor
  .call('crearUsuario', {
    username,
    profile: { name, gustos },
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
  username, gustos, name,
}) => {
  if (!name) {
    return 'Debe ingresar un nombre';
  }

  if (!username || !regexUsadas.email.test(username)) {
    return 'Debe ingresar un correo electronico valido';
  }

  if (_.isEmpty(gustos)) {
    return 'Debe ingresar al menos un gusto';
  }

  return false;
};
