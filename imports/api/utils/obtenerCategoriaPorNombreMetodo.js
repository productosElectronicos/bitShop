import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerCategoriaPorNombre from './obtenerCategoriaPorNombre';

const obtenerCategoriaPorNombreMetodo = new ValidatedMethod({
  name: 'obtenerCategoriaPorNombre',
  validate: new SimpleSchema({
    nombre: { type: 'String' },
  }).validator(),
  run({ nombre }) {
    this.unblock();
    const retorno = obtenerCategoriaPorNombre(nombre);

    return retorno;
  },
});

export default obtenerCategoriaPorNombreMetodo;
