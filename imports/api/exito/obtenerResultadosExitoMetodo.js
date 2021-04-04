import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosExito from './obtenerResultadosExito';

const obtenerResultadosExitoMetodo = new ValidatedMethod({
  name: 'obtenerResultadosExito',
  validate: new SimpleSchema({
    limit: { type: Number },
  }).validator(),
  run({ limit }) {
    const resultados = obtenerResultadosExito(limit);

    return resultados;
  },
});

export default obtenerResultadosExitoMetodo;
