import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import crearPalabraBuscada from './crearPalabraBuscada';

const crearPalabraBuscadaMetodo = new ValidatedMethod({
  name: 'crearPalabraBuscada',
  validate: new SimpleSchema({
    busqueda: { type: String },
  }).validator(),
  run({ busqueda }) {
    const usuarioId = Meteor.userId();

    // guardamos la palabra o editamos la última modificación
    const resultados = crearPalabraBuscada({
      usuarioId,
      busqueda,
    });

    return resultados;
  },
});

export default crearPalabraBuscadaMetodo;
