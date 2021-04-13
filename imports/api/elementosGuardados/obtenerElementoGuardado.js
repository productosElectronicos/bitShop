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
 * @param {Number} entrada.limit limite de la consulta
 * @returns {Producto[]}
 */

const obtenerElementoGuardado = ({ usuarioId, limit = 10, sort = { fechaGuardado: -1 } }) => {
  const elementosGuardados = ElementosGuardados.find({ usuarioId }, {
    limit,
    sort,
  }).fetch();

  return elementosGuardados;
};

export default obtenerElementoGuardado;
