/* eslint-disable react/prop-types */
import { withStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

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
import InputLabel from '@material-ui/core/InputLabel';

// components imports
import { crearUsuario, noEsValidoRegistrarse } from './helpersRegistro.js';

import Copyright from '../Copyright/Copyright.jsx';
import registroStyles from './registroStyles';

const Registro = ({ classes }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [gustos, setGustos] = useState(null);

  const onRegisterUser = async (event) => {
    event.preventDefault();

    const errorRegistrando = noEsValidoRegistrarse({
      name,
      gustos,
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
        gustos: gustos.map((gusto) => gusto.value),
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
      <div className={classes.paper}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Avatar
              className={classes.avatar}
              alt="BitShop"
              src="/images/BITSHOP.png"
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

              <br />

              <InputLabel htmlFor="gustos">
                Escribe tus gustos
              </InputLabel>
              <CreatableSelect
                id="gustos"
                isClearable
                isMulti
                options={[]}
                onChange={setGustos}
                value={gustos}
                placeholder=""
              />

              <br />
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
                    <Link href="/inicio-sesion" variant="body2">
                      ¿Tienes una cuenta? Ingresa aqui ahora!
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

export default withStyles(registroStyles)(Registro);
