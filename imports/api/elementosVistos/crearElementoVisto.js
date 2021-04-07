import ElementosVistos from '../../collections/elementosVistos';

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
  * @returns {Number|String}  id mongo del elemento creado o cantidad de elementos actualizados
*/
const crearElementoVisto = ({ producto, usuarioId }) => {
  const elementoInsertado = ElementosVistos.upsert({
    enlaceProducto: producto.enlaceProducto,
    usuarioId,
  }, {
    $set: {
      ...producto,
      usuarioId,
      fechaVisualizacion: new Date(),
    },
  });

  return elementoInsertado;
};

export default crearElementoVisto;
