import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Perfil = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>

        <Card>
          <CardContent>
            <Box height={290}>
              <Typography align="left" variant="h3">
                Información Personal
              </Typography>

              <Typography align="left" variant="subtitle1">
                Correo: correobitshop@gmail.com
              </Typography>
              <Typography align="left" variant="subtitle1">
                Nombre: Usuario BitShop Unal
              </Typography>
              <Typography align="left" variant="subtitle1">
                Longevidad: 04 de feb. 2021 - 2 meses
              </Typography>
            </Box>
          </CardContent>
        </Card>

      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box height={290}>
              <Typography align="left" variant="h3">
                Cambio de contraseña
              </Typography>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña Actual"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nueva Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirme Nueva Contraseña"
                type="password"
                id="password"
              />
              <Container>
                <Grid align="right">
                  <Button variant="contained" size="small" color="primary">
                    Cambiar Contraseña
                  </Button>
                </Grid>
              </Container>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box height={290}>
              <Typography align="left" variant="h3">
                Últimas 10 Palabras Buscadas
              </Typography>
              <Typography align="left" variant="subtitle1">
                Computador - 04 de feb. 2021 15:23
              </Typography>
              <Typography align="left" variant="subtitle1">
                Tarjeta Gráfica - 04 de feb. 2021 15:30
              </Typography>
              <Typography align="left" variant="subtitle1">
                TV 42" - 11 de feb. 2021 19:00
              </Typography>
              <Typography align="left" variant="subtitle1">
                Smart TV - 11 de feb. 2021 19:05
              </Typography>
              <Typography align="left" variant="subtitle1">
                Samsung - 11 de feb. 2021 19:17
              </Typography>
              <Typography align="left" variant="subtitle1">
                PC gamer - 01 de mar. 2021 21:00
              </Typography>
              <Typography align="left" variant="subtitle1">
                Mouse - 16 de mar. 2021 09:00
              </Typography>
              <Typography align="left" variant="subtitle1">
                Cable de Red - 16 de mar. 2021 09:19
              </Typography>
              <Typography align="left" variant="subtitle1">
                HDMI - 16 de mar. 2021 09:52
              </Typography>
              <Typography align="left" variant="subtitle1">
                Play Station 5 - 01 de abr. 2021 19:00
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box height={290}>
              <Typography align="left" variant="h3">
                Últimos 10 Productos Vistos
              </Typography>
              <Typography align="left" variant="subtitle1">
                Cards con los ultimos productos vistos
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

    </Grid>

  </>
);

export default Perfil;
