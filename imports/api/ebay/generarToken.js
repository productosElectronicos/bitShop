import _ from 'lodash';

import { fetch } from 'meteor/fetch';
import { DateTime } from 'luxon';

const urlToken = 'https://api.ebay.com/identity/v1/oauth2/token?grant_type=client_credentials&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope';

const token = {};

const tokenEbay = async () => {
  const CLIENT_SECRET = process.env.EBAY_CLIENT_SECRET;

  const fechaActual = DateTime.now();

  const { fechaActualizacion = new Date() } = token;

  const fechaActualizacionConvertida = DateTime.fromJSDate(fechaActualizacion);
  const duracion = fechaActual.diff(fechaActualizacionConvertida, 'hours').hours;

  if (_.isEmpty(token) || duracion > 1.5) {
    token.fechaActualizacion = new Date();

    try {
      const llamado = await (fetch(urlToken, {
        method: 'POST',
        headers: {
          'Contet-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${CLIENT_SECRET}`,
        },
      }));

      const respuesta = await llamado.json();

      token.value = respuesta.access_token;

      return token.value;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      token.value = 'NOHAYTOKEN';
    }
  }

  return token.value;
};

export default tokenEbay;
