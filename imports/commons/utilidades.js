/**
  * función para transformar un texto con un separador
  * @param {Object} entrada
  * @param {String} entrada.texto
  * @param {String} entrada.separador
  * @param {String} entrada.nuevoSeparador
  * @returns {String}
*/
export const transformarTexto = ({
  texto, separador, nuevoSeparador,
}) => texto.replaceAll(separador, nuevoSeparador);

/**
 * función para convertir número en string
 * @param {Number} numero
 * @returns {String}
 */
export const tranformarNumeroAString = (numero) => numero.toLocaleString('es-CO');

/**
 * @param {String} texto
 * @returns {String}
 */
export const removerAcentos = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
