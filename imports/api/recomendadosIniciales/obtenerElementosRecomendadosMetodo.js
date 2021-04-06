import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerElementosRecomendados from './obtenerElementosRecomendados';

const obtenerElementosRecomendadosMetodo = new ValidatedMethod({
  name: 'obtenerElementosRecomendados',
  validate: new SimpleSchema({
    limit: { type: Number, optional: true },
  }).validator(),
  run({ limit }) {
    const resultados = MPromise.await(obtenerElementosRecomendados(limit));

    return resultados;
  },
});

export default obtenerElementosRecomendadosMetodo;
