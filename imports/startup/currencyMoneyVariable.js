import { Meteor } from 'meteor/meteor';

if (Meteor.settings && Meteor.settings.CURRENCY_MONEY) {
  process.env.CURRENCY_MONEY = Meteor.settings.CURRENCY_MONEY;
}
