import _ from 'lodash';

import Puppeteer from 'puppeteer';

import obtenerValorPesoADolar from '../conversorPeso/conversor';

/**
 * enlace de búsqueda de amazon
 * @constant
 * @type {String}
 * @default
 */
const URL_AMAZON_BUSQUEDA = 'https://www.amazon.com/s?k=';

/**
 *
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} fotoProducto
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * Productos con precio convertido a pesos
 * @param {Number} valorPesoADolar
 * @returns {Resultado}
 */
const convertirPreciosAPesos = (valorPesoADolar) => (producto) => ({
  ...producto,
  precioProducto: producto.precioProducto * valorPesoADolar,
});

/**
 * función para parsear los resultados de amazon
 * @returns {Resultado[]}
 */

const parsearResultados = () => {
  const links = Array
    .from(document.querySelectorAll('.s-result-item'));

  return links
    .map((link) => {
      const precio = link.querySelector('.a-price-whole');
      const titulo = link.querySelector('div > span > div > div > div  h2 > a > span');
      if (!titulo || !precio) {
        return null;
      }

      const textoPrecio = precio ? precio.innerText : '';

      const numeroSinComas = textoPrecio.replaceAll(',', '');

      return {
        nombreProducto: titulo.innerText,
        enlaceProducto: link.querySelector('.a-link-normal.a-text-normal').href,
        fotoProducto: link.querySelector('.s-image').src,
        precioProducto: parseFloat(numeroSinComas),
        tienda: 'Amazon',
      };
    })
    .filter((producto) => producto);
};

/**
 * Función para hacer web scraping de amazon con un texto de búsqueda
 * @param {Object} entrada
 * @param {String} entrada.texto
 * @param {Number} entrada.limit
 * @returns {Resultado[]}
 */
const obtenerResultadosAmazon = async({ texto, limit = 10 }) => {
  const busqueda = `${URL_AMAZON_BUSQUEDA}${texto}`;

  // create a new browser instance
  const browser = await Puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  // create a page inside the browser;
  const page = await browser.newPage();

  // navigate to a website and set the viewport
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(busqueda, {
    timeout: 3000000,
  });

  const resultados = await page.evaluate(parsearResultados);

  // close the browser
  await browser.close();

  const valorPesoADolar = await obtenerValorPesoADolar();

  if (limit) {
    const datosLimitados = _.sampleSize(resultados, limit);

    return datosLimitados.map(convertirPreciosAPesos(valorPesoADolar));
  }

  return resultados.map(convertirPreciosAPesos(valorPesoADolar));
};

export default obtenerResultadosAmazon;
