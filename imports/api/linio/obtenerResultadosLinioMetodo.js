import { ValidatedMethod } from 'meteor/mdg:validated-method';

import obtenerResultadosLinio from './obtenerResultadosLinio';

const obtenerResultadosLinioMetodo = new ValidatedMethod({
  name: 'obtenerResultadosLinio',
  validate: null,
  run() {
    const resultados = obtenerResultadosLinio();

    return resultados;
  },
});

export default obtenerResultadosLinioMetodo;
