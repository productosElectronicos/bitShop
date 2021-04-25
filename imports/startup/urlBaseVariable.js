import { Meteor } from 'meteor/meteor';

if (Meteor.settings && Meteor.settings.URL_BASE) {
  process.env.URL_BASE = Meteor.settings.URL_BASE;
}
