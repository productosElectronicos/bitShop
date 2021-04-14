import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

const eliminarElementoGuardadoMethod = new ValidatedMethod({
  name: 'eliminarElementoGuardado',
  validate: new SimpleSchema({
    nombre: { type: String },
    numeroTelefonico: {
      type: Number,
      optional: true,
    },
  }),
});

export default eliminarElementoGuardadoMethod;
