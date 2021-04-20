import { fetch } from 'meteor/fetch';

/**
  * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} fotoProducto
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * Función para buscar resultaods en ebay
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number} entrada.limit
 * @returns {Resultado[]}
 */
const { EBAY_CLIENT } = process.env.EBAY_CLIENT;
const URL_BASE1 = 'https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=';
const URL_BASE2 = '&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=';
const URL_BASE3 = '&paginationInput.entriesPerPage=';
const SITE = '&GLOBAL-ID=EBAY-US&siteid=0&';

// TODO: A esto le falta la implementación de los filtros
const obtenerResultadosEbay = async ({ texto, limit = 10 }) => {
  const url = `${URL_BASE1}${EBAY_CLIENT}${URL_BASE2}${texto}${URL_BASE3}${limit}${SITE}`;

  try {
    const llamado = await (fetch(url, {
      method: 'GET',
    }));
  } catch (error) {
    console.error(error);
  }
};
