import { Meteor } from 'meteor/meteor';

if (Meteor.settings && Meteor.settings.MAIL_URL) {
  process.env.MAIL_URL = Meteor.settings.MAIL_URL;
}
