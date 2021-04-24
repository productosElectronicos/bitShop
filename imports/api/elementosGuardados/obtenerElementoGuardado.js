import ElementosGuardados from '../../collections/elementosGuardados';

/**
 * objeto con datos de producto guardado
 * @typedef Producto
 * @property {String} usuarioId
 * @property {String} productoId
 * @property {String} enlaceProducto
 * @property {Date} fechaGuardado
 */

/**
 * función para obtener los elementos guardados del usuario
 * @param {Object} entrada
 * @param {String} entrada.usuarioId id del usuario
 * @param {Number} entrada.limit limite de la consulta
 * @param {Object} entrada.sort, sort es de la forma { parametroAOrdenar: Number }
 * @returns {Producto[]}
 */

const obtenerElementoGuardado = ({
  usuarioId,
  limit = 10,
  sort = { fechaGuardado: -1 },
}) => ElementosGuardados.find({ usuarioId }, {
  limit,
  sort,
}).fetch();

export default obtenerElementoGuardado;
