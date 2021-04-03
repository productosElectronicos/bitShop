/* eslint-disable react/prop-types */
/* eslint-disable no-console */

import { withStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

import React, { useState } from 'react';

// material ui core
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// components imports
import { iniciarSesion, noEsValidoIniciarSesion } from './helpersInicioSesion.js';

import Copyright from '../Copyright/Copyright.jsx';
import registroStyles from '../Registro/registroStyles';

const InicioSesion = ({ classes }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginUser = async (event) => {
    event.preventDefault();

    const errorIniciando = noEsValidoIniciarSesion({
      password,
      username,
    });

    if (errorIniciando) {
      enqueueSnackbar(errorIniciando, {
        variant: 'error',
      });
      return;
    }

    try {
      await iniciarSesion({
        password,
        username,
      });

      enqueueSnackbar('Sesión iniciada con éxito!', {
        variant: 'success',
      });
    } catch (error) {
      console.error(error);

      enqueueSnackbar('Datos invalidos, por favor verificar', {
        variant: 'error',
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Avatar
              className={classes.avatar}
              alt="BitShop"
              src="images/BITSHOP.png"
              variant="rounded"
            />

            <Typography component="h1" variant="h5">
              Iniciar sesión en BitShop
            </Typography>

            <form className={classes.form} validate="true" onSubmit={(event) => onLoginUser(event)}>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                autoFocus
                label="Correo electronico"
                name="email"
                autoComplete="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Iniciar Sesión
              </Button>

              <Grid container>
                <Grid item xs={12}>
                  <div className={classes.textItemAlign}>
                    <Link href="/registro" variant="body2">
                      ¿No tienes cuenta? Registrate aqui!
                    </Link>
                  </div>

                </Grid>
              </Grid>
            </form>

            <Box mt={8}>
              <Copyright />
            </Box>

          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default withStyles(registroStyles)(InicioSesion);
