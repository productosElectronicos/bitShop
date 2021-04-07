import PalabrasBuscadas from '../../collections/palabrasBuscadas';

/**
  * @typedef RetornoUpsert
  * @property {Number} numberAffected cantidad de datos editados
  * @property {String} insertedId id mongo creado si no encuentra elemento
*/

/**
  * función para insertar una palabra en la base de datos para un usuario
  * @param {Object} entrada
  * @param {String} entrada.busqueda texto buscado por el usuario
  * @param {String} entrada.usuarioId id del usuario autenticado
  * @returns {RetornoUpsert} resultado de la inserción de la palabra
*/
const crearPalabraBuscada = ({ busqueda, usuarioId }) => {
  const elementoInsertado = PalabrasBuscadas.upsert({
    busqueda,
    usuarioId,
  }, {
    $set: {
      busqueda,
      usuarioId,
      fechaBusqueda: new Date(),
    },
  });

  return elementoInsertado;
};

export default crearPalabraBuscada;
