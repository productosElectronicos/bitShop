import { ValidatedMethod } from 'meteor/mdg:validated-method';

const test = new ValidatedMethod({
  name: 'test',
  validate: null,
  run() {
    console.log('funciona');

    return {
      a: 1,
      b: '2',
    };
  },
});

export default test;
