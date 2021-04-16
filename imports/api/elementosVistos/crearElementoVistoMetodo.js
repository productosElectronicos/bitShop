import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import crearElementoVisto from './crearElementoVisto';

const crearElementoVistoMetodo = new ValidatedMethod({
  name: 'crearElementoVisto',
  validate: new SimpleSchema({
    producto: { type: Object },
    'producto.productoId': { type: String, optional: true },
    'producto.tienda': { type: String },
    'producto.enlaceProducto': { type: String },
  }).validator(),
  run({ producto }) {
    const { _id: usuarioId } = Meteor.user();

    const elementoCreado = crearElementoVisto({ producto, usuarioId });

    return elementoCreado;
  },
});

export default crearElementoVistoMetodo;
