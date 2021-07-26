import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosLinio from './obtenerResultadosLinio';

const obtenerResultadosLinioMetodo = new ValidatedMethod({
  name: 'obtenerResultadosLinio',
  validate: new SimpleSchema({
    limit: { type: Number },
    texto: { type: String },
  }).validator(),
  run({ limit, texto }) {
    this.unblock();
    const resultados = obtenerResultadosLinio({
      limit,
      texto,
    });

    return MPromise.await(resultados);
  },
});

export default obtenerResultadosLinioMetodo;
