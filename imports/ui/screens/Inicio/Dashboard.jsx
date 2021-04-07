/* eslint-disable no-console */
import _ from 'lodash';

import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import {
  obtenerResultadosPorTienda, obtenerPalabrasBuscadas,
  obtenerResultadosMercadoLibre, obtenerElementosRecomendados,
} from './helperDashboard.js';

import CardGeneral from '../CardGeneral/CardGeneral.jsx';

const Dashboard = () => {
  const [ultimaPalabraBuscada, setUltimaPalabraBuscada] = useState('');
  const [listadoLinio, setListadoLinio] = useState([]);
  const [listadoExito, setListadoExito] = useState([]);
  const [listadoFalabella, setListadoFalabella] = useState([]);
  const [listadoMercadoLibre, setListadoMercadoLibre] = useState([]);
  const [listadoRecomendados, setListadoRecomendados] = useState([]);
  const [listadoAmazon, setListadoAmazon] = useState([]);

  const obtenerProductosAmazon = async () => {
    try {
      const datosAmazon = await obtenerResultadosPorTienda({
        limit: 4,
        metodo: 'obtenerResultadosAmazon',
      });
      setListadoAmazon(datosAmazon);
    } catch (error) {
      console.error(error);
    }
  };
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

  const obtenerUltimaPalabraBuscada = async() => {
    const listadoUltimaPalabra = await obtenerPalabrasBuscadas(1);

    if (!_.isEmpty(listadoUltimaPalabra)) {
      setUltimaPalabraBuscada(listadoUltimaPalabra[0].busqueda);
    }
  };

  const obtenerResultadoMercadoLibre = async (texto) => {
    try {
      const resultadosMercadoLibre = await obtenerResultadosMercadoLibre({
        limit: 4,
        texto,
      });

      setListadoMercadoLibre(resultadosMercadoLibre);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerResultadosRecomendados = async (texto) => {
    try {
      const resultadosRecomendados = await obtenerElementosRecomendados({
        texto,
      });

      setListadoRecomendados(resultadosRecomendados);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (ultimaPalabraBuscada) {
      obtenerResultadoMercadoLibre(ultimaPalabraBuscada);
      obtenerResultadosRecomendados(ultimaPalabraBuscada);
    }
  }, [ultimaPalabraBuscada]);

  useEffect(() => {
    obtenerUltimaPalabraBuscada();
    obtenerProductosAmazon();
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
          <CardGeneral listaOfertas={listadoRecomendados} titulo="Basado en tu última búsqueda!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={listadoMercadoLibre} titulo="Ofertas Mercado Libre Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={ultimaPalabraBuscada ? listadoAmazon : []} titulo="Ofertas Amazon Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={ultimaPalabraBuscada ? listadoLinio : []} titulo="Ofertas Linio Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={ultimaPalabraBuscada ? listadoFalabella : []} titulo="Ofertas Falabella Recomendadas para ti!" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={ultimaPalabraBuscada ? listadoExito : []} titulo="Ofertas Exito Recomendadas para ti!" />
        </Grid>

      </Grid>

    </>
  );
};

export default Dashboard;
