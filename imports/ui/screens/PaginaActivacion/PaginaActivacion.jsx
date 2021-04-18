/* eslint-disable no-console */
import { withStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// material ui core
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// components imports
import Copyright from '../Copyright/Copyright.jsx';
import registroStyles from '../Registro/registroStyles';
import CargandoPagina from '../CargandoPagina/CargandoPagina.jsx';
import { validarToken } from './helpersPaginaActivacion.js';
import SinResultados from '../SinResultados/SinResultados.jsx';

const PaginaActivacion = ({ classes }) => {
  const { token } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [estaCargandoPagina, setEstaCargandoPagina] = useState(true);
  const [estaValidoElToken, setEstaValidoElToken] = useState(true);

  const validarTokenInicioSesion = async() => {
    try {
      const esValido = await validarToken(token);

      setEstaValidoElToken(esValido);
      setEstaCargandoPagina(false);
    } catch (error) {
      console.error(error);
      setEstaCargandoPagina(false);
      setEstaValidoElToken(false);
    }
  };

  useEffect(() => {
    validarTokenInicioSesion();
    return () => null;
  }, []);

  const contenidoComponente = estaValidoElToken ? (
    <>
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

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Confirmar Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Activar cuenta
      </Button>

    </>
  ) : (
    <SinResultados
      texto="Token invalido &#128577;, valida el último correo enviado"
    />
  );
  return (
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

              <Typography component="h1" variant="h5">
                Activa tu cuenta en BitShop!
              </Typography>

              <form className={classes.form} validate="true" onSubmit={(event) => onLoginUser(event)}>

                {estaCargandoPagina
                  ? (
                    <CargandoPagina
                      texto="Verificando token..."
                      mostrarImagen={false}
                    />
                  )
                  : contenidoComponente }
              </form>

              <Box mt={8}>
                <Copyright />
              </Box>

            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
};

PaginaActivacion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(registroStyles)(PaginaActivacion);
