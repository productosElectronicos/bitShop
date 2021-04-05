import _ from 'lodash';

import obtenerTodosLosResultados from '../buscador/obtenerTodosLosResultados';

const obtenerElementosRecomendados = async () => {

  const resultados = await obtenerTodosLosResultados('portatil');

  console.log(resultados.slice(0, 4))

};

export default obtenerElementosRecomendados;
