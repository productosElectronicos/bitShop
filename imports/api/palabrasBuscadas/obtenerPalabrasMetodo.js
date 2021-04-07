import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerPalabras from './obtenerPalabras';

const obtenerPalabrasMetodo = new ValidatedMethod({
  name: 'obtenerPalabras',
  validate: new SimpleSchema({
    limit: { type: Number },
  }).validator(),
  run({ busqueda }) {
    const usuarioId = Meteor.userId();

    // guardamos la palabra o editamos la última modificación
    const resultados = obtenerPalabras({
      usuarioId,
      busqueda,
    });

    return resultados;
  },
});

export default obtenerPalabrasMetodo;
