import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import crearElementoVisto from './crearElementoVisto';

const crearElementoVistoMetodo = new ValidatedMethod({
  name: 'crearElementoVisto',
  validate: new SimpleSchema({
    producto: { type: Object },
    'producto.nombreProducto': { type: String },
    'producto.precioProducto': { type: Number },
    'producto.descripcionProducto': { type: String },
    'producto.localizacion': { type: String },
    'producto.fotoProducto': { type: String },
    'producto.esUsado': { type: Boolean },
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
