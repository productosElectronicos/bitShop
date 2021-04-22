import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosEbay from './obtenerResultadosEbay';

const obtenerResultadosEbayMetodo = new ValidatedMethod({
  name: 'obtenerResultadosEbay',
  validate: new SimpleSchema({
    texto: { type: String },
    limit: {
      type: Number,
      optional: true,
    },
  }).validator(),
  run({ texto, limit = 10 }) {
    const resultados = MPromise.await(obtenerResultadosEbay({ texto, limit }));

    return resultados;
  },
});

export default obtenerResultadosEbayMetodo;
