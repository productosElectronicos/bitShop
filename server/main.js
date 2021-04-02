import '../imports/startup';

import { Meteor } from 'meteor/meteor';

import searchGithubUserByNameMethod from '../imports/api/Busqueda/searchGithubUserByName';

Meteor.startup(() => {
  const resultado = searchGithubUserByNameMethod.call({
    username: 'jumarinr',
  });

  // eslint-disable-next-line no-console
  console.log(resultado);
});
