import { fetch } from 'meteor/fetch';
import { Meteor } from 'meteor/meteor';

const searchGithubUserByName = async (username) => {
  try {
    const llamado = await (fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: {
        'Contet-Type': 'application/json',
      },
    }));

    const resultado = await llamado.json();

    return resultado;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw new Meteor.Error('error-http-get', error.reason || error.message);
  }
};

export default searchGithubUserByName;
