/* eslint-disable no-console */
import _ from 'lodash';

import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import {
  obtenerResultadosDePrueba, obtenerPalabrasBuscadas,
  obtenerResultadosPorTienda, obtenerElementosRecomendados,
} from './helperDashboard.js';

import CardGeneral from '../CardGeneral/CardGeneral.jsx';

const Dashboard = () => {
  const [ultimaPalabraBuscada, setUltimaPalabraBuscada] = useState('');

  // manejo de array de resultados
  const [listadoLinio, setListadoLinio] = useState([]);
  const [listadoOlx, setListadoOlx] = useState([]);
  const [listadoEbay, setListadoEbay] = useState([]);
  const [listadoExito, setListadoExito] = useState([]);
  const [listadoFalabella, setListadoFalabella] = useState([]);
  const [listadoMercadoLibre, setListadoMercadoLibre] = useState([]);
  const [listadoRecomendados, setListadoRecomendados] = useState([]);
  const [listadoAmazon, setListadoAmazon] = useState([]);

  // cargando estados
  const [cargandoMercardoLibre, setCargandoMercardoLibre] = useState(true);
  const [cargandoAmazon, setCargandoAmazon] = useState(true);
  const [cargandoEbay, setCargandoEbay] = useState(true);
  const [cargandoRecomendaciones, setCargandoRecomendaciones] = useState(true);

  const obtenerProductosAmazon = async (texto) => {
    try {
      const datosAmazon = await obtenerResultadosPorTienda({
        texto,
        limit: 4,
        metodo: 'obtenerResultadosAmazon',
      });
      setListadoAmazon(datosAmazon);
    } catch (error) {
      console.error(error);
    }
    setCargandoAmazon(false);
  };
  const obtenerProductosEbay = async (texto) => {
    try {
      const datosEbay = await obtenerResultadosPorTienda({
        texto,
        limit: 4,
        metodo: 'obtenerResultadosEbay',
      });
      setListadoEbay(datosEbay);
    } catch (error) {
      console.error(error);
    }
    setCargandoEbay(false);
  };
  const obtenerProductosOlx = async () => {
    try {
      const datosOlx = await obtenerResultadosDePrueba({
        limit: 4,
        metodo: 'obtenerResultadosOlx',
      });
      setListadoOlx(datosOlx);
    } catch (error) {
      console.error(error);
    }
  };
  const obtenerProductosLinio = async () => {
    try {
      const datosLinio = await obtenerResultadosDePrueba({
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
      const datosExito = await obtenerResultadosDePrueba({
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
      const datosFalabella = await obtenerResultadosDePrueba({
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
    } else {
      setCargandoMercardoLibre(false);
      setCargandoRecomendaciones(false);
      setCargandoAmazon(false);
      setCargandoEbay(false);
    }
  };

  const obtenerResultadoMercadoLibre = async (texto) => {
    try {
      const resultadosMercadoLibre = await obtenerResultadosPorTienda({
        limit: 4,
        texto,
        metodo: 'obtenerResultadosMercadoLibre',
      });

      setListadoMercadoLibre(resultadosMercadoLibre);
    } catch (error) {
      console.error(error);
    }
    setCargandoMercardoLibre(false);
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
    setCargandoRecomendaciones(false);
  };

  useEffect(() => {
    if (ultimaPalabraBuscada) {
      obtenerResultadoMercadoLibre(ultimaPalabraBuscada);
      obtenerProductosAmazon(ultimaPalabraBuscada);
      obtenerProductosEbay(ultimaPalabraBuscada);
      obtenerResultadosRecomendados(ultimaPalabraBuscada);
    }
  }, [ultimaPalabraBuscada]);

  useEffect(() => {
    obtenerUltimaPalabraBuscada();
    obtenerProductosOlx();
    obtenerProductosLinio();
    obtenerProductosExito();
    obtenerProductosFalabella();
    return () => null;
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoRecomendados : []}
            titulo="Basado en tu última búsqueda!"
            isLoading={cargandoRecomendaciones}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoMercadoLibre : []}
            titulo="Ofertas Mercado Libre Recomendadas para ti!"
            isLoading={cargandoMercardoLibre}

          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoAmazon : []}
            titulo="Ofertas Amazon Recomendadas para ti!"
            isLoading={cargandoAmazon}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoEbay : []}
            titulo="Ofertas Ebay Recomendadas para ti!"
            isLoading={cargandoEbay}
          />
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
        <Grid item xs={12} md={4}>
          <CardGeneral listaOfertas={listadoOlx} titulo="Ofertas Olx Recomendadas para ti!" />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
