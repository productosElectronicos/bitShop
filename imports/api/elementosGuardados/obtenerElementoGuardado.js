import ElementosGuardados from '../../collections/elementosGuardados';

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
    fields: { usuarioId: 0, fechaGuardado: 0 },
  }).fetch();

  return elementosGuardados;
};

export default obtenerElementoGuardado;
