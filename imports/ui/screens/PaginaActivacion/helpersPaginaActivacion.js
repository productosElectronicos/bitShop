import { Meteor } from 'meteor/meteor';

export const a = 1;

export const validarToken = (token) => new Promise((resolve, reject) => {
  Meteor.call('validarToken', { token }, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
