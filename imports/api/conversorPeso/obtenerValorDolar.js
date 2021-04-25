/* eslint-disable no-console */
import _ from 'lodash';

import { DateTime } from 'luxon';
import { fetch } from 'meteor/fetch';

const valorPesoADolar = {};

/**
 * función para obtener cuanto vale 1 dolar a pesos
 * @returns {Promise<Number>} valor de 1 dolar a pesos
 */
const obtenerValorPesoADolar = async () => {
  const urlCurrencyLayer = `http://api.currencylayer.com/live?access_key=${process.env.CURRENCY_MONEY}&format=1`;
  const fechaActual = DateTime.now();

  const { fechaActualizacion = new Date() } = valorPesoADolar;

  const fechaActualizacionConvertida = DateTime.fromJSDate(fechaActualizacion);
  const duracion = fechaActual.diff(fechaActualizacionConvertida, 'hours').hours;

  if (_.isEmpty(valorPesoADolar) || duracion > 6) {
    valorPesoADolar.fechaActualizacion = new Date();

    try {
      const llamado = await (fetch(urlCurrencyLayer));

      const result = await llamado.json();

      valorPesoADolar.unDolarAPeso = result.quotes.USDCOP;
    } catch (error) {
      console.error(error);
      valorPesoADolar.unDolarAPeso = 3600;
      valorPesoADolar.fechaActualizacion = DateTime.now().plus({ days: -1 }).toJSDate();
    }
  }

  return valorPesoADolar.unDolarAPeso;
};

export default obtenerValorPesoADolar;
