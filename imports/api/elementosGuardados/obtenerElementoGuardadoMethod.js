import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import obtenerElementoGuardado from './actualizarElementoGuardado';

const obtenerElementoGuardadoMethod = new ValidatedMethod({
  name: 'obtenerElementoGuardado',
  validate: new SimpleSchema({
    nombre: { type: String },
    numeroTelefonico: {
      type: Number,
      optional: true,
    },
  }),
});

export default obtenerElementoGuardadoMethod;
