import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import eliminarElementoGuardado from './eliminarElementoGuardado';

const eliminarElementoGuardadoMetodo = new ValidatedMethod({
  name: 'eliminarElementoGuardado',
  validate: new SimpleSchema({
    productoId: { type: String, optional: true },
    enlaceProducto: { type: String },
  }).validator(),
  run({ productoId, enlaceProducto }) {
    const { _id: usuarioId } = Meteor.user();
    return eliminarElementoGuardado({ usuarioId, productoId, enlaceProducto });
  },
});

export default eliminarElementoGuardadoMetodo;
