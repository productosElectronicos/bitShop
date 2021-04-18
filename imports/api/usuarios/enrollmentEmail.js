import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

const enrollmentEmail = (email) => {
  const user = Accounts.findUserByEmail(email);

  if (!user) {
    throw new Meteor.Error('usuario_no_encontrado', 'Usuario no encontrado');
  }

  try {
    Accounts.sendEnrollmentEmail(user._id);
  } catch (error) {
    console.error(error);

    throw new Meteor.Error('correo_no_enviado', 'Correo de verificación no enviado');
  }
};

export default enrollmentEmail;
