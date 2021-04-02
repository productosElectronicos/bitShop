import { Meteor } from 'meteor/meteor';

// material ui core
import Button from '@material-ui/core/Button';

import React from 'react';

const Dashboard = () => (
  < >
    Id Usuario autenticado:
    {' '}
    {Meteor.userId()}
    <Button
      size="small"
      color="primary"
      variant="contained"
      style={{ backgroundColor: '#f85032' }}
      onClick={() => Meteor.logout()}
    >
      Cerrar sesión
    </Button>
  </>
);

export default Dashboard;
