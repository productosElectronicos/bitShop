/**
 * Productos con precio convertido a pesos
 * @param {Number} valorPesoADolar
 * @returns {Resultado}
 */
const convertirPreciosAPesos = (valorPesoADolar) => (producto) => ({
  ...producto,
  precioProducto: producto.precioProducto * valorPesoADolar,
});

export default convertirPreciosAPesos;
