import { makeStyles } from '@material-ui/core/styles';

import React, { useContext, useEffect, useRef } from 'react';

// material ui core
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import { filtrarBackEnd } from './helperPaginaBusqueda';

import BusquedaContext from '../../contextos/BusquedaContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    '& label.Mui-focused': {
      color: theme.palette.selectoresFontColor.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.selectoresFontColor.main,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  contenedor: {
    margin: 0,
    width: '100%',
  },
}));

export default function Select1() {
  const classes = useStyles();
  const didMountRef = useRef(false);

  // estados
  const [rpp, setrpp] = React.useState('');
  const [ordp, setorp] = React.useState('asc');
  const [agrp, setagrp] = React.useState('');

  const obtenerResultados = useContext(BusquedaContext);

  const handleChange1 = (event) => {
    setrpp(event.target.value);
  };
  const handleChange2 = (event) => {
    setorp(event.target.value);
  };
  const handleChange3 = (event) => {
    setagrp(event.target.value);
  };

  useEffect(() => {
    if (didMountRef.current) {
      const query = filtrarBackEnd({
        ordenarPor: {
          atributo: 'precioProducto',
          orden: ordp,
        },
        limit: rpp,
      });
      obtenerResultados(query);
    } else {
      didMountRef.current = true;
    }
  }, [ordp, rpp]);

  return (
    <>
      <Grid container justify="flex-end" spacing={2} className={classes.contenedor}>
        <Grid item xs={12} md={2}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel shrink id="rp">
              Resultados por Página:
            </InputLabel>
            <Select
              labelId="rp"
              id="select-1"
              value={rpp}
              onChange={handleChange1}
              placeholder="Seleccione una opción"
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={2}>
          <FormControl className={classes.formControl} color="secondary" fullWidth>
            <InputLabel shrink id="ord">
              Ordenar por:
            </InputLabel>
            <Select
              labelId="ord"
              id="select-2"
              value={ordp}
              onChange={handleChange2}
              placeholder="Seleccione una opción"
            >
              <MenuItem value="asc">Menor Precio</MenuItem>
              <MenuItem value="desc">Mayor Precio</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={2}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel shrink id="agru">
              Agrupar por:
            </InputLabel>
            <Select
              labelId="agru"
              id="select-3"
              value={agrp}
              onChange={handleChange3}
              placeholder="Seleccione una opción"
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
