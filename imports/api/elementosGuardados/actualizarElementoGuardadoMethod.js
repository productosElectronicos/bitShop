import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import actualizarElementoGuardado from './actualizarElementoGuardado';

const actualizarElementoGuardadoMethod = new ValidatedMethod({
  name: 'actualizarElementoGuardado',
  validate: new SimpleSchema({
    nombre: { type: String },
    numeroTelefonico: {
      type: Number,
      optional: true,
    },
  }),
});

export default actualizarElementoGuardadoMethod;
