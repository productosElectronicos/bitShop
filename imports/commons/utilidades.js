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

/**
 * función para agregar variables a template de html
 * @param {String} htmlString template
 * @param {Object} data data a editar en el html
 * @returns {String} html ya transformado
 */
export const construirEmail = (htmlString, data) => Object
  .keys(data)
  .reduce((html, key) => {
    const regexTexto = new RegExp(`{{${key}}}`, 'g');

    return html.replace(regexTexto, data[key]);
  }, htmlString);
