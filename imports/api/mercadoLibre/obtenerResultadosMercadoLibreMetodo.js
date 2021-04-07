import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosMercadoLibre from './obtenerResultadosMercadoLibre';

const obtenerResultadosMercadoLibreMetodo = new ValidatedMethod({
  name: 'obtenerResultadosMercadoLibre',
  validate: new SimpleSchema({
    texto: { type: String },
    limit: {
      type: Number,
      optional: true,
    },
  }).validator(),
  run({ texto, limit = 10 }) {
    const resultados = MPromise.await(obtenerResultadosMercadoLibre({ limit, texto }));

    return resultados;
  },
});

export default obtenerResultadosMercadoLibreMetodo;
