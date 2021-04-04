import _ from 'lodash';

import BlueBird from 'bluebird';

import obtenerResultadosLinio from '../linio/obtenerResultadosLinio';
import obtenerResultadosFalabella from '../falabella/obtenerResultadosFalabella';

/**
 *
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
*/

/**
 * función para filtrar los resultados
 * @param {Object} entrada
 * @param {Resultado[]} entrada.productos
 * @param {String} entrada.texto
 */
const filtrarPorTexto = ({ productos = [], texto }) => {
  const regexTexto = new RegExp(`^(.*?(\\b${texto.toLowerCase()}\\b)[^$]*)$`);

  const filtro = productos
    .filter(
      (producto) => regexTexto.test(producto.nombreProducto.toLowerCase().trim())
      || regexTexto.test(producto.descripcionProducto.toLowerCase().trim()),
    );

  return filtro;
};

/**
 * función para retornar resultados
 * @param {String} texto
 * @returns {Resultado[]}
 */
const obtenerTodosLosResultados = async (texto) => {
  // obtenemos todos los resultados paralelamente
  const allResultados = BlueBird.props({
    resultadosLinio: filtrarPorTexto({
      productos: obtenerResultadosLinio(),
      texto,
    }),
    resultadosFalabella: filtrarPorTexto({
      productos: obtenerResultadosFalabella(),
      texto,
    }),

  });

  const { resultadosLinio, resultadosFalabella } = await allResultados;

  const totalResultados = _.concat(resultadosLinio, resultadosFalabella);

  const totalResultadosOrdenados = _.orderBy(
    totalResultados,
    ['precioProducto'],
    ['asc'],
  );

  return totalResultadosOrdenados;
};

export default obtenerTodosLosResultados;
