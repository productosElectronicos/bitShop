/* eslint-disable no-console */
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Meteor } from 'meteor/meteor';

import SimpleSchema from 'simpl-schema';

const validarTokenMetodo = new ValidatedMethod({
  name: 'validarToken',
  validate: new SimpleSchema({
    token: { type: String },
  }).validator(),
  run({ token }) {
    const existeElToken = !Meteor.users.findOne({
      'services.password.reset.token': token,
    }, {
      fields: {
        'services.password.reset.token': 1,
      },
    });

    return existeElToken;
  },
});

export default validarTokenMetodo;
