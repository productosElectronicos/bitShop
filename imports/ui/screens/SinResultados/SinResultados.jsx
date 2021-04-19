import { withStyles } from '@material-ui/core/styles';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import paginaSuspendidaStyles from '../PaginaSuspendida/paginaSuspendidaStyles.jsx';

const SinResultados = ({ texto, classes, mostrarImagen }) => (
  <>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Card>
          <CardContent className={classes.cardContent}>
            {mostrarImagen ? (
              <Avatar
                className={classes.avatar}
                alt="BitShop"
                src="/images/BITSHOP.png"
                variant="rounded"
              />
            ) : null}
            <Typography component="h1" variant="h6">
              {texto}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  </>
);

SinResultados.defaultProps = {
  mostrarImagen: true,
};

SinResultados.propTypes = {
  texto: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  mostrarImagen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

export default withStyles(paginaSuspendidaStyles)(SinResultados);
