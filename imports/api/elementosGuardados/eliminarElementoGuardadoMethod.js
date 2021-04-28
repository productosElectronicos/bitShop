import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import eliminarElementoGuardado from './eliminarElementoGuardado';

const eliminarElementoGuardadoMethod = new ValidatedMethod({
  name: 'eliminarElementoGuardado',
  validate: new SimpleSchema({
    productoId: { type: String },
  })._validator(),
  run({ productoId }) {
    const { _id: usuarioId } = Meteor.user();
    return eliminarElementoGuardado({ usuarioId });
  },
});

export default eliminarElementoGuardadoMethod;
