/* eslint-disable react/prop-types */

import { withStyles } from '@material-ui/core/styles';
import { PropagateLoader } from 'react-spinners';

import React from 'react';

// material ui core
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import paginaSuspendidaStyles from './paginaSuspendidaStyles.jsx';

const PaginaSuspendida = ({ classes }) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar
        className={classes.avatar}
        alt="BitShop"
        src="images/BITSHOP.png"
        variant="rounded"
      />
      <Typography component="h1" variant="h6">
        <PropagateLoader color="#f1ce61" />
      </Typography>

    </div>

  </Container>
);

export default withStyles(paginaSuspendidaStyles)(PaginaSuspendida);
