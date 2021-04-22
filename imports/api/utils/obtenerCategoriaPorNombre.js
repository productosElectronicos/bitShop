/* eslint-disable no-undef */
const categorias = JSON.parse(Assets.getText('categorias.json'));

/**
 * @typedef Categoria
 * @property {String} label
 * @property {String} value
 * @property {String[]} categories
 */

/**
 * función para obtener una categoria y sus valores
 * @param {String} value  nombre de la categoria
 * @returns {Categoria}
 */
const obtenerCategoriaPorNombre = (value) => {
  const retorno = categorias.find((categoria) => categoria.value === value);

  return retorno;
};

export default obtenerCategoriaPorNombre;
