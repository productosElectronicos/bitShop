import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerProductoMercadoLibre from './obtenerProductoMercadoLibre';

const obtenerProductoMercadoLibreMetodo = new ValidatedMethod({
  name: 'obtenerProductoMercadoLibre',
  validate: new SimpleSchema({
    productoId: { type: String },
  }).validator(),
  run({ productoId }) {
    const resultado = MPromise.await(obtenerProductoMercadoLibre(productoId));

    return resultado;
  },
});

export default obtenerProductoMercadoLibreMetodo;
