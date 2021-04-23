import { Meteor } from 'meteor/meteor';

if (Meteor.settings && Meteor.settings.RAWG_KEY) {
  process.env.RAWG_KEY = Meteor.settings.RAWG_KEY;
}
