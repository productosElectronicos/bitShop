import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Promise as MPromise } from 'meteor/promise';

import SimpleSchema from 'simpl-schema';

import obtenerTodosLosResultados from './obtenerTodosLosResultados';

const obtenerTodosLosResultadosMetodo = new ValidatedMethod({
  name: 'obtenerTodosLosResultados',
  validate: new SimpleSchema({
    texto: { type: String },
  }).validator(),
  run({ texto }) {
    const resultados = MPromise.await(obtenerTodosLosResultados(texto));

    return resultados;
  },
});

export default obtenerTodosLosResultadosMetodo;
