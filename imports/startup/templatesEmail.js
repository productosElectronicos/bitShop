/* eslint-disable no-undef */
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { construirEmail } from '../commons/utilidades';

/**
 * Función para construir el body html del enrollment email
 * @param {Object} user objeto del usuario en db
 * @param {String} url enlace de activación
 * @returns {String}
 */
const enrrollment = (user, url) => {
  const { profile: { name } } = user;

  const template = Assets.getText('plantillasEmail/confirm-email.html');

  const emailhtml = construirEmail(template, {
    fullName: name,
    btnLink: url,
  });

  return emailhtml;
};

Object.assign(Accounts.urls, {
  enrollAccount: (token) => Meteor.absoluteUrl(`verificar-cuenta/${token}`),
});

export default Object
  .assign(Accounts.emailTemplates, {
    from: 'bitShop <bitshopwebpage@gmail.com>',
    siteName: 'bit-shop.tech',
    enrollAccount: {
      subject: () => '¡BitShop te da la bienvenida!',
      html: enrrollment,
    },
  });
