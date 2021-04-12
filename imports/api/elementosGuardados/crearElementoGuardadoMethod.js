import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import crearElementoGuardado from './actualizarElementoGuardado';

const crearElementoGuadradoMetodo = new ValidatedMethod({
  name: 'crearElementoGuardado',
  validate: new SimpleSchema({
    producto: { type: Object },
    'producto.Id':{ type: String },
    'usuario.Id': { type: String },
    'fechaGuardado':{ type: Date },
    'producto.enlaceProducto': { type: String },
  }).validator(),
  run({ producto }) {
    const { _id: usuarioId } = Meteor.user();

    const elementoGuardado = crearElementoGuardado({ producto, usuarioId });

    return elementoGuardado;
  },
});

export default crearElementoGuardadoMetodo;











export default crearElementoGuardadoMetodo;
