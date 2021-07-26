import _ from 'lodash';

import BlueBird from 'bluebird';

import obtenerResultadosAmazon from '../amazon/obtenerResultadosAmazon';
import obtenerResultadosLinio from '../linio/obtenerResultadosLinio';
import obtenerResultadosFalabella from '../falabella/obtenerResultadosFalabella';
import obtenerResultadosExito from '../exito/obtenerResultadosExito';
import obtenerResultadosMercadoLibre from '../mercadoLibre/obtenerResultadosMercadoLibre';
import obtenerResultadosOlx from '../olx/obtenerResultadosOlx';
import obtenerResultadosEbay from '../ebay/obtenerResultadosEbay';

/**
 * @typedef Ordenamiento
 * @property {String} campo
 * @property {String} orden
 */

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
 * función para retornar resultados
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number} entrada.limit
 * @param {Ordenamiento} entrada.ordenarPor
 * @returns {Resultado[]}
 */
const obtenerTodosLosResultados = async ({ texto, limit, ordenarPor = {} }) => {
  // obtenemos todos los resultados paralelamente
  const allResultados = BlueBird.props({
    resultadosAmazon: obtenerResultadosAmazon({ texto }),
    resultadosLinio: obtenerResultadosLinio({ texto }),
    resultadosExito: obtenerResultadosExito({ texto }),
    resultadosOlx: obtenerResultadosOlx({ texto }),
    resultadosMercadoLibre: obtenerResultadosMercadoLibre({ texto }),
    resultadosEbay: obtenerResultadosEbay({ texto }),
    resultadosFalabella: obtenerResultadosFalabella({ texto }),

  });

  const {
    resultadosAmazon, resultadosLinio, resultadosFalabella,
    resultadosExito, resultadosMercadoLibre, resultadosOlx,
    resultadosEbay,
  } = await allResultados;

  const totalResultados = _.concat(
    resultadosAmazon,
    resultadosLinio,
    resultadosFalabella,
    resultadosExito,
    resultadosMercadoLibre,
    resultadosOlx,
    resultadosEbay,
  );

  const ordenamiento = {
    campo: ordenarPor?.campo || 'precioProducto',
    orden: ordenarPor?.orden || 'asc',
  };
  const totalResultadosOrdenados = _.orderBy(
    totalResultados,
    [ordenamiento.campo],
    [ordenamiento.orden],
  );

  if (limit) {
    return _.take(totalResultadosOrdenados, 4);
  }

  return totalResultadosOrdenados;
};

export default obtenerTodosLosResultados;
