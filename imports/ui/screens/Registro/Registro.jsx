/* eslint-disable react/prop-types */
import { withStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

import React, { useState } from 'react';

// material ui core
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// components imports
import { crearUsuario, noEsValidoRegistrarse } from './helpersRegistro.js';

import Copyright from '../Copyright/Copyright.jsx';
import registroStyles from './registroStyles';

const Registro = ({ classes }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterUser = async (event) => {
    event.preventDefault();

    const errorRegistrando = noEsValidoRegistrarse({
      name,
      password,
      username,
    });

    if (errorRegistrando) {
      enqueueSnackbar(errorRegistrando, {
        variant: 'error',
      });
      return;
    }

    try {
      await crearUsuario({
        name,
        password,
        username,
      });

      enqueueSnackbar('Usuario creado con éxito!', {
        variant: 'success',
      });
    } catch (error) {
      console.error(error);

      const messageError = error.reason || error.message;

      enqueueSnackbar(messageError, {
        variant: 'error',
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar
          className={classes.avatar}
          alt="BitShop"
          src="images/BITSHOP.png"
          variant="rounded"
        />

        <Typography component="h1" variant="h5">
          Registro para BitShop
        </Typography>

        <form className={classes.form} validate="true" onSubmit={(event) => onRegisterUser(event)}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre completo"
            name="nombre"
            autoComplete="true"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
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
            Registrarme ahora!
          </Button>

          <Grid container>
            <Grid item xs={12}>
              <div className={classes.textItemAlign}>
                <Link href="/" variant="body2">
                  ¿Tienes una cuenta? Ingresa aqui ahora!
                </Link>
              </div>

            </Grid>
          </Grid>

        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>

    </Container>
  );
};

export default withStyles(registroStyles)(Registro);
