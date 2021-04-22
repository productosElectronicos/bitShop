import { TimeoutError } from 'bluebird';
import Puppeteer from 'puppeteer';
import obtenerValorPesoADolar from '../conversorPeso/conversor';

/**
 * url guardada
 * @constant
 * @type {String}
 * @default
 */
const URL_GUARDADA = "https://www.amazon.com/-/es/New-Bee-NB-V5-0-Auriculares-inal%C3%A1mbricos/dp/B07FMSJZ3R"

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
 *
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} fotoProducto
 * @property {String} tienda
 */

/**
 * función para parsear los resultados de amazon
 * @returns {Resultado[]}
 */
const resultados = async( ) => {
    const links = Array

    return  links
        .map((link) => {
            const precio = link.querySelector('.price_inside_buybox');
            const titulo = link.querySelector('.productTitle')
            if (!titulo || !precio) {
                return null;
              }

            const textoPrecio = precio ? precio.innerText : '';

            const numeroSinComas = textoPrecio.replaceAll(',', '');

            return {
                nombreProducto: titulo.innerText,
                enlaceProducto: URL_GUARDADA,
                fotoProducto: link.querySelector('.imgTagWrapperId').src,
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
 const obtenerResultados = async() => {
     const browser = await Puppeteer.launch();
     const page = await browser.newPage();

     await page.setViewport({ width: 1280, height: 800 });
     await page.goto(URL_GUARDADA,{timeout:3000000,});

     await browser.close();

     const resultados = await page.evaluate(parsearResultados);

     return resultados.map(convertirPreciosAPesos(valorPesoADolar));
 }
 export default obtenerResultados;