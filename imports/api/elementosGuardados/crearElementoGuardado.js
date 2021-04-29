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
 *función para crear elemento guardado del usuario
 * @param {Object} entrada
 * @param {Producto} entrada.producto objeto con los datos del producto
 * @param {String} entrada.usuarioId id del usuario autenticado
 * @returns {productoGuardado}
 */

const crearElementoGuardado = ({ producto, usuarioId }) => ElementosGuardados.upsert({
  usuarioId,
  enlaceProducto: producto.enlaceProducto,
}, {
  $set: {
    ...producto,
    usuarioId,
    fechaGuardado: new Date(),
  },
});

export default crearElementoGuardado;
