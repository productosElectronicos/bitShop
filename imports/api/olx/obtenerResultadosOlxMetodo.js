import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosOlx from './obtenerResultadosOlx';

const obtenerResultadosOlxMetodo = new ValidatedMethod({
  name: 'obtenerResultadosOlx',
  validate: new SimpleSchema({
    limit: { type: Number },
  }).validator(),
  run({ limit }) {
    this.unblock();
    const resultados = obtenerResultadosOlx(limit);

    return resultados;
  },
});

export default obtenerResultadosOlxMetodo;
