import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosLinio from './obtenerResultadosLinio';

const obtenerResultadosLinioMetodo = new ValidatedMethod({
  name: 'obtenerResultadosLinio',
  validate: new SimpleSchema({
    limit: { type: Number },
  }).validator(),
  run({ limit }) {
    this.unblock();
    const resultados = obtenerResultadosLinio(limit);

    return resultados;
  },
});

export default obtenerResultadosLinioMetodo;
