/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import _ from 'lodash';

import { useSnackbar } from 'notistack';
import { DateTime } from 'luxon';

import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { cambiarContrasena, noSonIguales, obtenerInformacionUsuario } from './helperPerfil';
import { obtenerElementosVistos, obtenerPalabrasBuscadas } from '../Inicio/helperDashboard';

import SinResultados from '../SinResultados/SinResultados.jsx';
import CardResultado from '../PaginaBusqueda/CardResultado.jsx';

const Perfil = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [informacionUsuario, setInformacionUsuario] = useState({});
  const [primeraNueva, setPrimeraNueva] = useState('');
  const [segundaNueva, setSegundaNueva] = useState('');
  const [viejaContrasena, setViejaContrasena] = useState('');
  const [elementosVistos, setElementosVistos] = useState([]);
  const [palabras, setPalabras] = useState([]);

  const obtenerInfoUsuario = async() => {
    try {
      const informacion = await obtenerInformacionUsuario();

      setInformacionUsuario(informacion);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerInfoPalabrasBuscadas = async() => {
    try {
      const palabrasResultado = await obtenerPalabrasBuscadas(10);
      setPalabras(palabrasResultado);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerUltimosElementosVistos = async() => {
    try {
      const elementos = await obtenerElementosVistos({
        limit: 10,
      });

      setElementosVistos(elementos);
    } catch (error) {
      console.error(error);
    }
  };

  const alCambiarContrasenas = async() => {
    const noSonIgualesContrasenas = noSonIguales({
      primeraNueva,
      segundaNueva,
    });
    if (noSonIgualesContrasenas) {
      enqueueSnackbar('Las contraseñas no son iguales', {
        variant: 'error',
      });

      return;
    }
    try {
      await cambiarContrasena({
        nuevaContrasena: primeraNueva,
        viejaContrasena,
      });

      enqueueSnackbar('Contraseña cambiada con éxito', {
        variant: 'success',
      });
    } catch (error) {
      console.error(error);
      const errorMessage = error.reason || error.message;
      enqueueSnackbar(errorMessage, {
        variant: 'error',
      });
    }
  };

  const fechaCreacion = informacionUsuario?.createdAt || new Date();

  useEffect(() => {
    obtenerInfoUsuario();
    obtenerUltimosElementosVistos();
    obtenerInfoPalabrasBuscadas();
    return () => null;
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography align="left" variant="h6">
                <b>Información Personal</b>
              </Typography>
              <hr />
              <Box height={220}>
                <Typography align="left" variant="subtitle1">
                  <b>Correo: </b>
                  {informacionUsuario?.username}
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Nombre:</b>
                  {informacionUsuario?.profile?.name}
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Longevidad: </b>
                  {DateTime
                    .fromJSDate(fechaCreacion)
                    .setLocale('co')
                    .toFormat('ff a')}
                  {' '}
                  -
                  {' '}
                  <b>
                    {DateTime.fromJSDate(fechaCreacion).toRelativeCalendar()}
                  </b>
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Gustos: </b>
                  {' '}
                  {(informacionUsuario?.gustos || []).map((gusto) => `${gusto}, `)}
                </Typography>
              </Box>
            </CardContent>
          </Card>

        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography align="left" variant="h6">
                <b>Cambio de contraseña</b>
              </Typography>
              <hr />
              <Box height={220} style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <Grid container spacing={2} style={{ paddingTop: '0' }}>
                  <Grid item xs={12} style={{ paddingTop: '0' }}>
                    <TextField
                      variant="standard"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Contraseña Actual"
                      type="password"
                      id="password-old"
                      autoComplete="current-password"
                      value={viejaContrasena}
                      onChange={(event) => setViejaContrasena(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6} style={{ paddingTop: '0' }}>
                    <TextField
                      variant="standard"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Nueva Contraseña"
                      type="password"
                      id="password-new-1"
                      autoComplete="current-password"
                      value={primeraNueva}
                      onChange={(event) => setPrimeraNueva(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6} style={{ paddingTop: '0' }}>
                    <TextField
                      variant="standard"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Confirme Nueva Contraseña"
                      type="password"
                      id="password-new-2"
                      value={segundaNueva}
                      onChange={(event) => setSegundaNueva(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ textAlign: 'right' }}>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={alCambiarContrasenas}
                      >
                        Cambiar Contraseña
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography align="left" variant="h6">
                <b>Últimas 10 Palabras Buscadas</b>
              </Typography>
              <hr />
              <Box height={290}>
                {_.isEmpty(palabras)
                  ? (
                    <Grid item xs={12}>
                      <SinResultados texto="Sin Búsquedas &#128577;" />
                    </Grid>
                  )
                  : palabras.map((palabra) => (
                    <Typography align="left" variant="subtitle1" key={palabra.busqueda}>
                      {palabra.busqueda}
                      {' '}
                      -
                      {' '}
                      {DateTime
                        .fromJSDate(palabra.fechaBusqueda)
                        .setLocale('co')
                        .toFormat('ff a')}
                      {' '}
                    </Typography>
                  ))}

              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography align="left" variant="h6">
                <b>Últimos 10 Productos Vistos</b>
              </Typography>
              <hr />
              <Box height={290} style={{ overflowY: 'auto', overflowX: 'hidden' }}>

                <Grid container spacing={2}>
                  {_.isEmpty(elementosVistos)
                    ? (
                      <Grid item xs={12}>
                        <SinResultados texto="Sin vistas &#128577;" />
                      </Grid>
                    )
                    : elementosVistos.map((elemento) => (
                      <Grid item xs={12} md={3}>
                        <CardResultado {...elemento} />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </>
  );
};

export default Perfil;
