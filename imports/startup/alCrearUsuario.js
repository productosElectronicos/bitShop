import _ from 'lodash';

import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  const usuario = { ...user };
  if (options.profile) {
    const { gustos } = options.profile;

    const perfilActual = _.omit(options.profile, ['gustos']);

    Object.assign(usuario, {
      profile: perfilActual,
      gustos,
    });
  }

  return usuario;
});
