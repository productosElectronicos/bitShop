import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosFalabella from './obtenerResultadosFalabella';

const obtenerResultadosFalabellaMetodo = new ValidatedMethod({
  name: 'obtenerResultadosFalabella',
  validate: new SimpleSchema({
    limit: { type: Number },
  }).validator(),
  run({ limit }) {
    const resultados = obtenerResultadosFalabella(limit);

    return resultados;
  },
});

export default obtenerResultadosFalabellaMetodo;
