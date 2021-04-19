/* eslint-disable no-console */
import { Accounts } from 'meteor/accounts-base';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Meteor } from 'meteor/meteor';

import SimpleSchema from 'simpl-schema';
import enrollmentEmail from './enrollmentEmail';

const crearUsuario = new ValidatedMethod({
  name: 'crearUsuario',
  validate: new SimpleSchema({
    profile: { type: Object },
    'profile.name': { type: String },
    'profile.gustos': { type: Array },
    'profile.gustos.$': { type: String },
    username: { type: String },
  }).validator(),
  run({ username, profile }) {
    try {
      const idUsuario = Accounts.createUser({
        username,
        email: username,
        profile,
      });

      enrollmentEmail(username);

      return idUsuario;
    } catch (error) {
      console.error(error);

      const errorMensaje = error.reason || error.message;

      throw new Meteor.Error('error_creando_usuario', errorMensaje);
    }
  },
});

export default crearUsuario;
