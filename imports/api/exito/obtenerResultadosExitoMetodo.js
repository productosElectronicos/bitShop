import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosExito from './obtenerResultadosExito';

const obtenerResultadosExitoMetodo = new ValidatedMethod({
  name: 'obtenerResultadosExito',
  validate: new SimpleSchema({
    limit: { type: Number },
    texto: { type: String },
  }).validator(),
  run({ limit, texto }) {
    this.unblock();
    const resultados = obtenerResultadosExito({ limit, texto });

    return MPromise.await(resultados);
  },
});

export default obtenerResultadosExitoMetodo;
