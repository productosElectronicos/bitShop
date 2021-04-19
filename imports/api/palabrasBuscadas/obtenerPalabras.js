import _ from 'lodash';

import { Meteor } from 'meteor/meteor';

import PalabrasBuscadas from '../../collections/palabrasBuscadas';

/**
 * @typedef Busqueda
 * @property {String|null} _id id mongo del usuario
 * @property {String|null} usuarioId id mongo del usuario
 * @property {Date} fechaBusqueda fecha en que se consultó la búsqueda
 * @property {String} busqueda busqueda realizada
 */

/**
 * función para obtener los gustos del usuario si no hay buscado palabras
 * @param {String} usuarioId
 * @returns {Busqueda[]}
 */
const buscarGustosUsuario = (usuarioId, limit) => {
  const usuario = Meteor.users.findOne({ _id: usuarioId }, {
    fields: {
      gustos: 1,
      createdAt: 1,
    },
  });

  if (!usuario) {
    return [];
  }

  const { gustos = [], createdAt = new Date() } = usuario;

  const palabrasPorGustos = gustos.map((gusto) => ({
    fechaBusqueda: createdAt,
    busqueda: gusto,
  }));

  if (limit) {
    return _.sampleSize(palabrasPorGustos, limit);
  }

  return palabrasPorGustos;
};

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

  if (usuarioId && _.isEmpty(palabras)) {
    return buscarGustosUsuario(usuarioId, limit);
  }

  return palabras;
};

export default obtenerPalabras;
