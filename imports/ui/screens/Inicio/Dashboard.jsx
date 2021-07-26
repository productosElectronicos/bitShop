/* eslint-disable no-console */
import _ from 'lodash';

import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import { obtenerPalabrasBuscadas, obtenerResultadosPorTienda, obtenerElementosRecomendados } from './helperDashboard.js';

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
  const [cargandoFalabella, setCargandoFalabella] = useState(true);
  const [cargandoLinio, setCargandoLinio] = useState(true);
  const [cargandoOLX, setCargandoOLX] = useState(true);
  const [cargandoExito, setCargandoExito] = useState(true);
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
  const obtenerProductosFalabella = async (texto) => {
    try {
      const datosFalabella = await obtenerResultadosPorTienda({
        texto,
        limit: 4,
        metodo: 'obtenerResultadosFalabella',
      });
      setListadoFalabella(datosFalabella);
    } catch (error) {
      console.error(error);
    }
    setCargandoFalabella(false);
  };
  const obtenerProductosOlx = async (texto) => {
    try {
      const datosOlx = await obtenerResultadosPorTienda({
        texto,
        limit: 4,
        metodo: 'obtenerResultadosOlx',
      });
      setListadoOlx(datosOlx);
    } catch (error) {
      console.log('error linio');
      console.error(error);
    }
    setCargandoOLX(false);
  };
  const obtenerProductosLinio = async (texto) => {
    try {
      const datosLinio = await obtenerResultadosPorTienda({
        texto,
        limit: 4,
        metodo: 'obtenerResultadosLinio',
      });
      setListadoLinio(datosLinio);
    } catch (error) {
      console.log('error linio');
      console.error(error);
    }
    setCargandoLinio(false);
  };
  const obtenerProductosExito = async (texto) => {
    try {
      const datosExito = await obtenerResultadosPorTienda({
        texto,
        limit: 4,
        metodo: 'obtenerResultadosExito',
      });
      setListadoExito(datosExito);
    } catch (error) {
      console.error(error);
    }
    setCargandoExito(false);
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
      setCargandoFalabella(false);
      setCargandoLinio(false);
      setCargandoOLX(false);
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
      obtenerProductosFalabella(ultimaPalabraBuscada);
      obtenerResultadosRecomendados(ultimaPalabraBuscada);
      obtenerProductosLinio(ultimaPalabraBuscada);
      obtenerProductosOlx(ultimaPalabraBuscada);
      obtenerProductosExito(ultimaPalabraBuscada);
    }
  }, [ultimaPalabraBuscada]);

  useEffect(() => {
    obtenerUltimaPalabraBuscada();
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
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoFalabella : []}
            titulo="Ofertas Falabella Recomendadas para ti!"
            isLoading={cargandoFalabella}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoLinio : []}
            titulo="Ofertas Linio Recomendadas para ti!"
            isLoading={cargandoLinio}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoExito : []}
            titulo="Ofertas Exito Recomendadas para ti!"
            isLoading={cargandoExito}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardGeneral
            listaOfertas={ultimaPalabraBuscada ? listadoOlx : []}
            titulo="Ofertas Olx Recomendadas para ti!"
            isLoading={cargandoOLX}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
