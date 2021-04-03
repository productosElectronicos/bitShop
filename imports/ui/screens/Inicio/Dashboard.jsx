import { Meteor } from 'meteor/meteor';

import React from 'react';

// material ui core
import Button from '@material-ui/core/Button';

const Dashboard = () => (
  <>
    Id Usuario autenticado:
    {' '}
    {Meteor.userId()}
    <Button
      size="small"
      color="secondary"
      variant="contained"
      onClick={() => Meteor.logout()}
    >
      Cerrar sesión
    </Button>
  </>
);

export default Dashboard;
