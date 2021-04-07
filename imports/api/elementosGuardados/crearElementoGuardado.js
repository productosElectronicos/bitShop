import ElementosGuardados from '../../collections/elementosGuardados';

/**
 *
 * @typedef Producto
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
 *
 * @param {Object} entrada
 * @param {Producto} entrada.producto objeto con los datos del producto
 * @param {String} entrada.usuarioId id del usuario autenticado
 */

const crearElementoGuardado = ({ producto, usuarioId }) => {
  const elementoGuardado = ElementosGuardados.upsert({
    usuarioId,
    url: producto.enlaceProducto,
  }, {
    $set: {
      ...producto,
      usuarioId,
      fechaGuardado: new Date(),
    },
  });

  return elementoGuardado;
};

export default crearElementoGuardado;
