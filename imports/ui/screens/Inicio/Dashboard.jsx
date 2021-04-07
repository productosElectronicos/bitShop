import { Meteor } from 'meteor/meteor';

import React from 'react';

const Dashboard = () => (
  <>
    Id Usuario autenticado:
    {' '}
    {Meteor.userId()}
  </>
);

export default Dashboard;
