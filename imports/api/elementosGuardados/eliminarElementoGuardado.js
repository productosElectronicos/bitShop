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
 * @param {Number} entrada.productoId id del producto
 * @returns {Producto[]}
 */

const eliminarElementoGuardado = (entrada) => ElementosGuardados.remove(entrada).fetch();

export default eliminarElementoGuardado;
