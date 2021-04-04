import ElementosVistos from '../../collections/elementosVistos';

/**
 * objeto con datos de producto visto
 * @typedef Producto
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 * @property {String} usuarioId
 * @property {Date} fechaVisualizacion
*/

/**
 * función para obtener los resultados de los elementos vistos
 * @param {Object} entrada
 * @param {String} entrada.usuarioId id del usuario
 * @param {Number} entrada.limit limite de la consulta
 * @param {Object} entrada.sort Nota: sort es de la forma { parametroAOrdenar: Number }
 * @returns {Producto[]}
 */

const obtenerElementosVistos = ({ usuarioId, sort = { fechaVisualizacion: -1 }, limit = 10 }) => {
  const elementosVistos = ElementosVistos.find({ usuarioId }, {
    sort,
    limit,
  }).fetch();

  return elementosVistos;
};

export default obtenerElementosVistos;
