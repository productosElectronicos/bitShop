/* eslint-disable no-console */
import _ from 'lodash';

import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import { obtenerTodosLosResultados } from './helperPaginaBusqueda';
import { removerAcentos, transformarTexto } from '../../../commons/utilidades';

import CargandoPagina from '../CargandoPagina/CargandoPagina.jsx';
import SinResultados from '../SinResultados/SinResultados.jsx';
import ResultadosBusqueda from './ResultadosBusqueda.jsx';

const PaginaBusqueda = () => {
  const { id: busqueda } = useParams();

  let busquedaTransformada = transformarTexto({
    nuevoSeparador: ' ',
    separador: '+',
    texto: busqueda,
  });

  busquedaTransformada = removerAcentos(busquedaTransformada);

  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerResultados = async() => {
    try {
      const listaResultados = await obtenerTodosLosResultados(busquedaTransformada);

      setResultados(listaResultados);
      setCargando(false);
    } catch (error) {
      console.error(error);
      setResultados([]);
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerResultados()
      .then()
      .catch();
    return () => null;
  }, []);

  const resultadosPagina = _.isEmpty(resultados)
    ? <SinResultados texto="Sin resultados &#128577;, valida tu consulta" />
    : <ResultadosBusqueda resultados={resultados} />;
  return (
    <>
      {cargando
        ? <CargandoPagina texto="Cargando Resultados..." />
        : resultadosPagina}
    </>
  );
};

export default PaginaBusqueda;
