import React from 'react';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Select1() {
  const classes = useStyles();
  const [rpp, setrpp] = React.useState('');
  const [ordp, setorp] = React.useState('');
  const [agrp, setagrp] = React.useState('');

  const handleChange1 = (event) => {
    setrpp(event.target.value);
  };
  const handleChange2 = (event) => {
    setorp(event.target.value);
  };
  const handleChange3 = (event) => {
    setagrp(event.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={2} />

        <Grid item xs={12} md={1}>
          <Typography>
            Resultados por Página:
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl className={classes.formControl}>
            <InputLabel id="rp" />
            <Select
              labelId="rp"
              id="select-1"
              value={rpp}
              onChange={handleChange1}
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={16}>16</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={1}>
          <Typography>
            Ordenar por:
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl className={classes.formControl}>
            <InputLabel id="ord" />
            <Select
              labelId="ord"
              id="select-2"
              value={ordp}
              onChange={handleChange2}
            >
              <MenuItem value={0}>Menor Precio</MenuItem>
              <MenuItem value={1}>Mayor Precio</MenuItem>
              <MenuItem value={2}>Mejor Calificación</MenuItem>
              <MenuItem value={3}>Peor Calificación</MenuItem>
              <MenuItem value={4}>Más Ventas</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={1}>
          <Typography>
            Agrupar por:
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl className={classes.formControl}>
            <InputLabel id="agru" />
            <Select
              labelId="agru"
              id="select-3"
              value={agrp}
              onChange={handleChange3}
            >
              <MenuItem value={0}>Precios</MenuItem>
              <MenuItem value={1}>Tiendas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
