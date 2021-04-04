import { withStyles } from '@material-ui/core/styles';
import { PropagateLoader } from 'react-spinners';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import paginaSuspendidaStyles from '../PaginaSuspendida/paginaSuspendidaStyles.jsx';

const CargandoPagina = ({ texto, classes }) => (
  <>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Avatar
              className={classes.avatar}
              alt="BitShop"
              src="/images/BITSHOP.png"
              variant="rounded"
            />
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              {texto}
            </Typography>
            <PropagateLoader color="#f1ce61" />
          </CardContent>
        </Card>
      </div>
    </Container>
  </>
);

CargandoPagina.propTypes = {
  texto: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(paginaSuspendidaStyles)(CargandoPagina);
