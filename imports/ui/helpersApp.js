import { Meteor } from 'meteor/meteor';

/**
 *
 * @typedef RetornoTest
 * @property {Number} a esto es una prueba
 * @property {String} b
 */

/**
 * @returns {Promise<RetornoTest>}
*/
const test = () => new Promise((resolve, reject) => {
  Meteor.call('test', (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

export default test;
