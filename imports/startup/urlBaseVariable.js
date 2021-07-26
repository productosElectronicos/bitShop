import { Meteor } from 'meteor/meteor';

if (Meteor.settings) {
  process.env.URL_BASE_AMAZON = Meteor.settings.URL_BASE_AMAZON;
  process.env.URL_BASE_LINIO = Meteor.settings.URL_BASE_LINIO;
  process.env.URL_BASE_FALABELLA = Meteor.settings.URL_BASE_FALABELLA;
  process.env.URL_BASE_EXITO = Meteor.settings.URL_BASE_EXITO;
  process.env.URL_BASE_OLX = Meteor.settings.URL_BASE_OLX;
  process.env.MAIL_URL = Meteor.settings.MAIL_URL;
}
