import { Meteor } from 'meteor/meteor';

if (Meteor.settings && Meteor.settings.EBAY_CLIENT_SECRET) {
  process.env.EBAY_CLIENT_SECRET = Meteor.settings.EBAY_CLIENT_SECRET;
}
