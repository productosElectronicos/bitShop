import SimpleSchema from 'simpl-schema';

export default {
  email: SimpleSchema.RegEx.EmailWithTLD,
};
