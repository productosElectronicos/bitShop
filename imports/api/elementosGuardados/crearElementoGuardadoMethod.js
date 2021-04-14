import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import crearElementoGuardado from './crearElementoGuardado';

const crearElementoGuardadoMetodo = new ValidatedMethod({
  name: 'crearElementoGuardado',
  validate: new SimpleSchema({
    producto: { type: Object },
    'producto.Id': { type: String },
    'usuario.Id': { type: String },
    fechaGuardado: { type: Date },
    'producto.enlaceProducto': { type: String },
  }).validator(),
  run({ producto }) {
    const { _id: usuarioId } = Meteor.user();

    return crearElementoGuardado({
      producto,
      usuarioId,
    });
  },
});

export default crearElementoGuardadoMetodo;
