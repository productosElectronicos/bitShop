import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import eliminarElementoGuardado from './eliminarElementoGuardado';

const eliminarElementoGuardadoMetodo = new ValidatedMethod({
  name: 'eliminarElementoGuardado',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    return eliminarElementoGuardado(_id);
  },
});

export default eliminarElementoGuardadoMetodo;
