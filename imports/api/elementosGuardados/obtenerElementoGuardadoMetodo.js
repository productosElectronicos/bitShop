import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import obtenerElementoGuardado from './obtenerElementoGuardado';

const obtenerElementoGuardadoMetodo = new ValidatedMethod({
  name: 'obtenerElementoGuardado',
  validate: new SimpleSchema({
    usuarioId: { type: String },
    limit: {
      type: Number,
      optional: true,
    },
    sort: {
      type: Object,
      blackbox: true,
      optional: true,
    },
  })._validator(),
  run({
    sort = { fechaGuardado: -1 },
    limit = 10,
  }) {
    const { _id: usuarioId } = Meteor.user();

    return obtenerElementoGuardado({
      sort,
      limit,
      usuarioId,
    });
  },
});

export default obtenerElementoGuardadoMetodo;
