import { Grid } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import CardGeneral from '../CardGeneral/CardGeneral.jsx';
import { obtenerResultadosPorTienda } from './helperDashboard.js';

const Dashboard = () => {
  const [listadoLinio, setListadoLinio] = useState([]);
  const [listadoExito, setListadoExito] = useState([]);
  const [listadoFalabella, setListadoFalabella] = useState([]);

  const obtenerProductosLinio = async () => {
    try {
      const datosLinio = await obtenerResultadosPorTienda({
        limit: 4,
        metodo: 'obtenerResultadosLinio',
      });
      setListadoLinio(datosLinio);
    } catch (error) {
      console.error(error);
    }
  };
  const obtenerProductosExito = async () => {
    try {
      const datosExito = await obtenerResultadosPorTienda({
        limit: 4,
        metodo: 'obtenerResultadosExito',
      });
      setListadoExito(datosExito);
    } catch (error) {
      console.error(error);
    }
  };
  const obtenerProductosFalabella = async () => {
    try {
      const datosFalabella = await obtenerResultadosPorTienda({
        limit: 4,
        metodo: 'obtenerResultadosFalabella',
      });
      setListadoFalabella(datosFalabella);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    obtenerProductosLinio();
    obtenerProductosExito();
    obtenerProductosFalabella();
    return () => null;
  }, []);
  return (

    <>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={[]} titulo="Basado en tu última búsqueda!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={[]} titulo="Ofertas Amazon Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={[]} titulo="Ofertas Mercado Libre Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={listadoLinio} titulo="Ofertas Linio Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={listadoFalabella} titulo="Ofertas Falabella Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={listadoExito} titulo="Ofertas Exito Recomendadas para ti!" />
        </Grid>

      </Grid>

    </>
  );
};

export default Dashboard;
