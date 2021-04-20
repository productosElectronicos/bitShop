import { Meteor } from 'meteor/meteor';

if (Meteor.settings && Meteor.settings.EBAY_CLIENT) {
  process.env.EBAY_CLIENT = Meteor.settings.EBAY_CLIENT;
}
