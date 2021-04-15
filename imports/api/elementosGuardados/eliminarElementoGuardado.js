import ElementosGuardados from '../../collections/elementosGuardados';

const eliminarElementoGuardado = (element) => ElementosGuardados.remove(element).fetch();

export default eliminarElementoGuardado;
