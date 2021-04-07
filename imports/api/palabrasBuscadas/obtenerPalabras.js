import PalabrasBuscadas from '../../collections/palabrasBuscadas';

/**
 * @typedef Busqueda
 * @property {String} _id id mongo del usuario
 * @property {String} usuarioId id mongo del usuario
 * @property {Date} fechaBusqueda fecha en que se consultó la búsqueda
 * @property {String} busqueda busqueda realizada
 */

/**
 * función para obtener n buscadas en orden descendente (última a primera buscada)
 * @param {Object} entrada
 * @param {Number} entrada.limit limite de palabras a retornar
 * @param {String} entrada.usuarioId id del usuario
 * @returns {Busqueda[]} listado de búsquedas por un usuario
 */
const obtenerPalabras = ({ limit = 10, usuarioId }) => {
  // listado de palabras buscadas por un usuario
  const palabras = PalabrasBuscadas
    .find({ usuarioId }, {
      sort: {
        fechaBusqueda: -1,
      },
      limit,
    })
    .fetch();

  return palabras;
};

export default obtenerPalabras;
