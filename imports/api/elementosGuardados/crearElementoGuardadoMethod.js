import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import crearElementoGuardado from './actualizarElementoGuardado';

const crearElementoGuardadoMethod = new ValidatedMethod({
  name: 'crearElementoGuardado',
  validate: new SimpleSchema({
    nombre: { type: String },
    numeroTelefonico: {
      type: Number,
      optional: true,
    },
  }),
});

export default crearElementoGuardadoMethod;
