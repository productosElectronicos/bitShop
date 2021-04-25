import { fetch } from 'meteor/fetch';

import convertirPreciosAPesos from '../conversorPeso/conversor';
import obtenerValorPesoADolar from '../conversorPeso/obtenerValorDolar';
import tokenEbay from './generarToken';

/**
  * @typedef Resultado
 * @property {String} productoId
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Bool} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * función para transformar el listado para lo que requiere la página
 * @param {Object[]} listadoMercadoLibre
 * @returns {Resultado[]}
*/
const transformarObjetoEbay = (listadoEbay = []) => listadoEbay
  .map((producto) => ({
    productoId: producto?.itemId,
    nombreProducto: producto?.title,
    precioProducto: Number.parseFloat(producto?.price.value),
    localizacion: producto?.itemLocation.country,
    fotoProducto: producto?.thumbnailImages[0].imageUrl,
    esUsado: producto?.conditionId === '3000',
    tienda: 'Ebay',
    enlaceProducto: producto?.itemWebUrl,
  }));

/**
 * Función para buscar resultaods en ebay
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number} entrada.limit
 * @returns {Resultado[]}
 */
// const { EBAY_CLIENT } = process.env.EBAY_CLIENT;
const URL_BASE = 'https://api.ebay.com/buy/browse/v1/item_summary/search?q=';

// TODO: A esto le falta la implementación de los filtros
const obtenerResultadosEbay = async ({ texto, limit = 10 }) => {
  const url = `${URL_BASE}${texto}&limit=${limit}&filter=deliveryCountry:CO`;

  const token = await tokenEbay();

  try {
    const llamado = await (fetch(url, {
      method: 'GET',
      headers: {
        'Contet-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }));

    // Asi se llama la variable que manda ebay
    const { itemSummaries } = await llamado.json();

    const resultado = transformarObjetoEbay(itemSummaries);

    const valorDolar = await obtenerValorPesoADolar();

    return resultado.map(convertirPreciosAPesos(valorDolar));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export default obtenerResultadosEbay;
