/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CardGeneral from '../CardGeneral/CardGeneral.jsx';
import { obtenerTodosLosResultados } from '../PaginaBusqueda/helperPaginaBusqueda.js';
import { transformarTexto } from '../../../commons/utilidades.js';

const SmartCarResultado = ({ categoria }) => {
  const [estaCargando, setEstaCargando] = useState(true);
  const [resultados, setResultados] = useState([]);

  const categoriaSeleccionada = transformarTexto({
    nuevoSeparador: '+',
    separador: ' ',
    texto: categoria,
  });

  const obtenerProductosCategoria = async() => {
    try {
      const produtos = await obtenerTodosLosResultados({
        texto: categoriaSeleccionada,
        limit: 4,
        ordenarPor: {
          campo: 'precioProducto',
          orden: 'desc',
        },
      });
      setResultados(produtos);
    } catch (error) {
      console.error(error);
      setResultados([]);
    }
    setEstaCargando(false);
  };

  useEffect(() => {
    obtenerProductosCategoria()
      .then()
      .catch();
    return () => null;
  }, []);

  return (
    <>
      <CardGeneral
        titulo={categoria}
        isLoading={estaCargando}
        listaOfertas={resultados}
      />
    </>
  );
};

SmartCarResultado.propTypes = {
  categoria: PropTypes.string.isRequired,
};

export default SmartCarResultado;
