import { Promise as MPromise } from 'meteor/promise';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosAmazon from './obtenerResultadosAmazon';

const obtenerResultadosAmazonMetodo = new ValidatedMethod({
  name: 'obtenerResultadosAmazon',
  validate: new SimpleSchema({
    texto: { type: String },
    limit: {
      type: Number,
      optional: true,
    },
  }).validator(),
  run({ limit, texto }) {
    const resultados = MPromise.await(obtenerResultadosAmazon({
      texto,
      limit,
    }));

    return resultados;
  },
});

export default obtenerResultadosAmazonMetodo;
