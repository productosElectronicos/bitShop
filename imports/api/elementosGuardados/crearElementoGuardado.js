import ElementosGuardados from '../../collections/elementosGuardados';

/**
 *objeto con datos de producto guardado
 * @typedef Producto
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 * @property {Date} fechaGuardado
 */

/**
 *función para crear elemento guardado del usuario
 * @param {Object} entrada
 * @param {Producto} entrada.producto objeto con los datos del producto
 * @param {String} entrada.usuarioId id del usuario autenticado
 * @returns {Producto[]}
 */

const crearElementoGuardado = ({ producto, usuarioId }) => ElementosGuardados.upsert({
  usuarioId,
  url: producto.enlaceProducto,
}, {
  $set: {
    ...producto,
    usuarioId,
    fechaGuardado: new Date(),
  },
}).fetch();

export default crearElementoGuardado;
