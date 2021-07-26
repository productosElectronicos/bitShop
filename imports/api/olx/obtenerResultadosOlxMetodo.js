import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosOlx from './obtenerResultadosOlx';

const obtenerResultadosOlxMetodo = new ValidatedMethod({
  name: 'obtenerResultadosOlx',
  validate: new SimpleSchema({
    limit: { type: Number },
    texto: { type: String },
  }).validator(),
  run({ limit, texto }) {
    this.unblock();
    const resultados = obtenerResultadosOlx({ limit, texto });

    return MPromise.await(resultados);
  },
});

export default obtenerResultadosOlxMetodo;
