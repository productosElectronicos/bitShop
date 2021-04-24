/**
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * @param {object} entrada
 * @param {String} entrada.texto limite de resultados
 * @param {Number|undefined} entrada.limit limite de resultados
 * @returns {Resultado[]}
 */

const { URL_BASE } = process.env;

const obtenerResultadosFalabella = async ({ texto, limit = 10 }) => {
  const url = `${URL_BASE}/falabella/${texto}/${limit}`;

  try {
    const llamado = await (fetch(url));

    if (llamado.status >= 500) {
      // eslint-disable-next-line no-console
      console.log('error al consumir datos de amazon. Estatus code: ', llamado.status);
      return [];
    }

    const resultado = await llamado.json();

    return resultado;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export default obtenerResultadosFalabella;
