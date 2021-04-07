import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export const obtenerInformacionUsuario = () => new Promise(
  (resolve, reject) => Meteor.call(
    'obtenerInformacionUsuario',
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
 * @param {Object} entrada
 * @param {String} entrada.primeraNueva
 * @param {String} entrada.segundaNueva
 * @returns
 */
export const noSonIguales = ({ primeraNueva, segundaNueva }) => {
  if (primeraNueva === segundaNueva) {
    return false;
  }

  return true;
};
export const cambiarContrasena = ({ viejaContrasena, nuevaContrasena }) => new Promise(
  (resolve, reject) => Accounts.changePassword(viejaContrasena,
    nuevaContrasena,
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    }),
);
