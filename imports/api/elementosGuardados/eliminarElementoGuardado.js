import ElementosGuardados from '../../collections/elementosGuardados';

/**
 * función para eliminar el elementos guardado del usuario
 * @param {String} _id id de mongo
 * @returns {Number} numero de elementos eliminados
 */

const eliminarElementoGuardado = (_id) => ElementosGuardados.remove(_id);

export default eliminarElementoGuardado;
