import ElementosGuardados from '../../collections/elementosGuardados';

/**
 * función para obtener los elementos guardados del usuario
 * @param {String} entrada id del usuario
 * @returns {Producto[]}
 */

const obtenerElementoGuardado = (usuarioId) => {
  const elementosGuardados = ElementosGuardados.find({ usuarioId }).fetch();

  return elementosGuardados;
};

export default obtenerElementoGuardado;
