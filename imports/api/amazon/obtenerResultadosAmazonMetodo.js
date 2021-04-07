import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosAmazon from './obtenerResultadosAmazon';

const obtenerResultadosAmazonMetodo = new ValidatedMethod({
  name: 'obtenerResultadosAmazon',
  validate: new SimpleSchema({
    limit: { type: Number },
  }).validator(),
  run({ limit }) {
    const resultados = obtenerResultadosAmazon(limit);

    return resultados;
  },
});

export default obtenerResultadosAmazonMetodo;
