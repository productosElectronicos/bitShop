import ElementosGuardados from '../../collections/elementosGuardados';

/**
 *objeto con datos de producto guardado
 * @typedef productoGuardado
 * @property {String} usuarioId
 * @property {String} enlaceProducto
 * @property {Date} fechaGuardado
 * @property {String} productoId
 *
 */

/**
 * función para eliminar el elementos guardado del usuario
 * @param {Object} entrada
 * @param {String} entrada.usuarioId id del usuario
 * @param {String} entrada.enlaceProducto enlace del producto
 * @param {Number} entrada.productoId id del producto
 * @returns {Number} numero de elementos eliminados
 */

const eliminarElementoGuardado = (entrada) => ElementosGuardados.remove(entrada);

export default eliminarElementoGuardado;
