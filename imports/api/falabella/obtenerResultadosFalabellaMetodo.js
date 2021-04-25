import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosFalabella from './obtenerResultadosFalabella';

const obtenerResultadosFalabellaMetodo = new ValidatedMethod({
  name: 'obtenerResultadosFalabella',
  validate: new SimpleSchema({
    texto: { type: String },
    limit: { type: Number, optional: true },
  }).validator(),
  run({ limit, texto }) {
    this.unblock();
    const resultados = obtenerResultadosFalabella({ texto, limit });

    return resultados;
  },
});

export default obtenerResultadosFalabellaMetodo;
