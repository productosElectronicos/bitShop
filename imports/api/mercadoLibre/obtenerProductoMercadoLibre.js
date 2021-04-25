import { fetch } from 'meteor/fetch';

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
 * @returns {Producto}
*/
const transformarObjeto = (producto = null) => ({
  nombreProducto: producto?.title,
  precioProducto: producto?.price,
  localizacion: producto?.seller_address?.city?.name,
  fotoProducto: producto?.pictures[0]?.url,
  esUsado: producto?.condition === 'used',
  tienda: 'Mercado Libre',
  enlaceProducto: producto?.permalink,
});

/**
 * función para buscar un producto de mercado libre por su id
 * @param {String} productoId
 * @returns {Producto}
*/

const URL_API_MERCADO_LIBRE = 'https://api.mercadolibre.com/items?ids=';
const atributos = '&attributes=price,title,pictures,address,condition,seller_address.city.name,permalink';

const obtenerProductoMercadoLibre = async (productoId) => {
  const url = `${URL_API_MERCADO_LIBRE}${productoId}${atributos}`;

  try {
    const llamado = await (fetch(url, {
      method: 'GET',
      headers: {
        'Contet-Type': 'application/json',
      },
    }));

    const { body } = (await llamado.json())[0];

    const resultado = transformarObjeto(body);

    return resultado;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

export default obtenerProductoMercadoLibre;
