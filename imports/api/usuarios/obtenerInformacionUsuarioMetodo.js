import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Meteor } from 'meteor/meteor';

const obtenerInformacionUsuarioMetodo = new ValidatedMethod({
  name: 'obtenerInformacionUsuario',
  validate: null,
  run() {
    this.unblock();
    const userInfo = Meteor.user({
      fields: {
        createdAt: 1,
        profile: 1,
        username: 1,
        gustos: 1,
      },
    });

    return userInfo;
  },
});

export default obtenerInformacionUsuarioMetodo;
