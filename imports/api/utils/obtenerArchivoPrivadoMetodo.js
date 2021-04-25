import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerArchivoPrivado from './obtenerArchivoPrivado';

const obtenerArchivoPrivadoMetodo = new ValidatedMethod({
  name: 'obtenerArchivoPrivado',
  validate: new SimpleSchema({
    nombre: { type: 'String' },
    conFuncionDeParseo: { type: Boolean, optional: true },
  }).validator(),
  run(data) {
    this.unblock();
    const retorno = obtenerArchivoPrivado(data);

    return retorno;
  },
});

export default obtenerArchivoPrivadoMetodo;
