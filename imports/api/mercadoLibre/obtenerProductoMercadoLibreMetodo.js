import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerProductoMercadoLibre from './obtenerProductoMercadoLibre';

const obtenerProductoMercadoLibreMetodo = new ValidatedMethod({
  name: 'obtenerProductoMercadoLibre',
  validate: new SimpleSchema({
    url: { type: String },
  }).validator(),
  run({ url }) {
    const resultado = MPromise.await(obtenerProductoMercadoLibre(url));

    return resultado;
  },
});

export default obtenerProductoMercadoLibreMetodo;
