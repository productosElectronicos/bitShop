import { ValidatedMethod } from 'meteor/mdg:validated-method';

import obtenerResultadosFalabella from './obtenerResultadosFalabella';

const obtenerResultadosFalabellaMetodo = new ValidatedMethod({
  name: 'obtenerResultadosFalabella',
  validate: null,
  run() {
    const resultados = obtenerResultadosFalabella();

    return resultados;
  },
});

export default obtenerResultadosFalabellaMetodo;
