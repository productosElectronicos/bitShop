import ElementosGuardados from '../../collections/elementosGuardados';

/**
 * objeto con datos de producto guardado
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
 * @property {Date} fechaGuardado
 */

/**
 * función para obtener los elementos guardados del usuario
 * @param {Object} entrada
 * @param {String} entrada.usuarioId id del usuario
 * @param {Number} entrada.productoId id del producto
 * @returns {Producto[]}
 */

const eliminarElementoGuardado = (entrada) => ElementosGuardados.remove(entrada).fetch();

export default eliminarElementoGuardado;
