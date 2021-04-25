/* eslint-disable no-undef */
const categorias = JSON.parse(Assets.getText('categorias.json'));

const archivosPrivados = new Map([
  ['categorias', categorias],
]);

/**
 * @typedef SelectOptions
 * @property {String} label
 * @property {String} value
 */

/**
 * función para quitar lo que no tenga label ni value
 * @param {Object[]} archivo
 * @returns {SelectOptions}
 */
const eliminarValoresParaSelect = (archivo = []) => archivo
  .map(({ label, value }) => ({ label, value }));

/**
 * función para retonar un archivo privado por nombre
 * @param {Object} entrada  objeto con parametros
 * @param {String} entrada.nombre  nombre de el archivo sin .json
 * @param {Boolean} entrada.conFuncionDeParseo si necesita parseo o no
 * @returns {Object[]}
 */
const obtenerArchivoPrivado = ({ nombre, conFuncionDeParseo }) => {
  const retorno = archivosPrivados.get(nombre);

  if (conFuncionDeParseo) {
    return eliminarValoresParaSelect(retorno);
  }

  return retorno;
};

export default obtenerArchivoPrivado;
