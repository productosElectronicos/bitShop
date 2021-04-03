import { Meteor } from 'meteor/meteor';

import React from 'react';

// material ui core
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Dashboard = () => (
  <Container component="main" maxWidth="xs">
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
  </Container>
);

export default Dashboard;
