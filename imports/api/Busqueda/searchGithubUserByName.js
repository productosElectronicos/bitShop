import { Promise as MeteorPromise } from 'meteor/promise';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import searchGithubUserByName from './searchGithubUserByNameMethod';

const searchGithubUserByNameMethod = new ValidatedMethod({
  name: 'searchGithubUserByName',
  validate: new SimpleSchema({
    username: { type: String },
  }).validator(),
  run({ username }) {
    const usuario = MeteorPromise.await(searchGithubUserByName(username));

    return usuario;
  },
});

export default searchGithubUserByNameMethod;
