import { Meteor } from 'meteor/meteor';
import { Promise as MPromise } from 'meteor/promise';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';
import crearPalabraBuscada from '../palabrasBuscadas/crearPalabraBuscada';

import obtenerTodosLosResultados from './obtenerTodosLosResultados';

const obtenerTodosLosResultadosMetodo = new ValidatedMethod({
  name: 'obtenerTodosLosResultados',
  validate: new SimpleSchema({
    texto: { type: String },
  }).validator(),
  run({ texto }) {
    const usuarioId = Meteor.userId();

    // agregamos el texto buscado a la colección de palabras buscadas
    crearPalabraBuscada({
      busqueda: texto,
      usuarioId,
    });

    // obtenemos los resultados
    const resultados = MPromise.await(obtenerTodosLosResultados(texto));

    return resultados;
  },
});

export default obtenerTodosLosResultadosMetodo;
