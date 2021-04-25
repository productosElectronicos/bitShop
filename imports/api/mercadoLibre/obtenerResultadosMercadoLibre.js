import { fetch } from 'meteor/fetch';
// import { Meteor } from 'meteor/meteor';

/**
 *
 * @typedef Producto
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
*/

/**
 * función para transformar el listado para lo que requiere la página
 * @param {Object[]} listadoMercadoLibre
 * @returns {Producto[]}
*/
const transformarObjeto = (listadoMercadoLibre = []) => listadoMercadoLibre
  .map((producto) => ({
    nombreProducto: producto?.title,
    precioProducto: producto?.price,
    descripcionProducto: '',
    localizacion: producto?.address?.city_name,
    fotoProducto: producto?.thumbnail,
    esUsado: false,
    tienda: 'Mercado Libre',
    enlaceProducto: producto?.permalink,
  }));

/**
 * @constant
 * @type {String}
 * @default
 */
const URL_API_MERCADO_LIBRE = 'https://api.mercadolibre.com/sites/MCO/search?q=';

/**
 * función para buscar resultados de mercadolibre
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number} entrada.limit
 * @returns {Object[]}
 */
const obtenerResultadosMercadoLibre = async ({ texto, limit = 10 }) => {
  const urlAConsumir = `${URL_API_MERCADO_LIBRE}${texto}&limit=${limit}`;

  try {
    const llamado = await (fetch(urlAConsumir, {
      method: 'GET',
      headers: {
        'Contet-Type': 'application/json',
      },
    }));

    const { results } = await llamado.json();

    const resultadosTransformados = transformarObjeto(results);

    return resultadosTransformados;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
    // throw new Meteor.Error('error-http-get', error.reason || error.message);
  }
};

export default obtenerResultadosMercadoLibre;
