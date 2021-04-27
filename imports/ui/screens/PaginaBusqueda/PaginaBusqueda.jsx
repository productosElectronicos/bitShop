/* eslint-disable no-console */
import { makeStyles } from '@material-ui/core/styles';

import _ from 'lodash';

import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import { obtenerTodosLosResultados } from './helperPaginaBusqueda';
import { removerAcentos, transformarTexto } from '../../../commons/utilidades';

import CargandoPagina from '../CargandoPagina/CargandoPagina.jsx';
import SinResultados from '../SinResultados/SinResultados.jsx';
import ResultadosBusqueda from './ResultadosBusqueda.jsx';
import BusquedaContext from '../../contextos/BusquedaContext';

const useStyles = makeStyles(() => ({
  oculto: {
    display: 'none',
  },
  visible: {
    visibility: 'visible',
  },
}));

const PaginaBusqueda = () => {
  const classes = useStyles();
  const { id: busqueda } = useParams();

  let busquedaTransformada = transformarTexto({
    nuevoSeparador: ' ',
    separador: '+',
    texto: busqueda,
  });

  busquedaTransformada = removerAcentos(busquedaTransformada);

  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerResultados = async({ ordenarPor, limit } = {}) => {
    setCargando(true);
    try {
      const listaResultados = await obtenerTodosLosResultados({
        texto: busquedaTransformada,
        ordenarPor,
        limit,
      });

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

  const mostrarResultados = cargando ? false : !_.isEmpty(resultados);

  const sinResultados = cargando ? false : _.isEmpty(resultados);

  return (
    <>
      <BusquedaContext.Provider value={obtenerResultados}>
        <div className={cargando ? classes.visible : classes.oculto}>
          <CargandoPagina texto="Cargando Resultados..." />
        </div>
        <div className={sinResultados ? classes.visible : classes.oculto}>
          <SinResultados
            texto="Sin resultados &#128577;, valida tu consulta"
          />
        </div>

        <div className={mostrarResultados ? classes.visible : classes.oculto}>
          <ResultadosBusqueda
            resultados={resultados}
          />
        </div>
      </BusquedaContext.Provider>
    </>
  );
};

export default PaginaBusqueda;
