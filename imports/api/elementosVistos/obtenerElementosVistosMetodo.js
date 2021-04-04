import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerElementosVistos from './obtenerElementosVistos';

const obtenerElementosVistosMetodo = new ValidatedMethod({
  name: 'obtenerElementosVistos',
  validate: new SimpleSchema({
    limit: {
      type: Number,
      optional: true,
    },
    sort: {
      type: Object,
      blackbox: true,
      optional: true,
    },
  }).validator(),
  run({
    sort = { fechaVisualizacion: -1 },
    limit = 10,
  }) {
    const { _id: usuarioId } = Meteor.user();

    const elementosVistos = obtenerElementosVistos({
      limit,
      sort,
      usuarioId,
    });

    return elementosVistos;
  },
});

export default obtenerElementosVistosMetodo;
