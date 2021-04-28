/* eslint-disable no-console */
import { ThemeProvider } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';

// material uu core
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// material ui icons
import Search from '@material-ui/icons/Search';

import { removerAcentos, transformarTexto } from '../../../commons/utilidades.js';
import { obtenerArchivoPrivado } from './helperNavegacion';

import themeSelectores from '../../theme/themeSelectores.js';

const LOCACION_SMART_CAR = '/smart-car';

const Buscador = () => {
  const { id: busquedaUsuario, value: busquedaSelector = '' } = useParams();
  const history = useHistory();

  const [busqueda, setBusqueda] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const rutaActual = history.location.pathname;
  const estaEnSmartCar = new RegExp(`${LOCACION_SMART_CAR}`).test(rutaActual);

  const obtenerCategorias = async() => {
    try {
      const resultado = await obtenerArchivoPrivado({
        conFuncionDeParseo: true,
        nombre: 'categorias',
      });
      setCategorias(resultado);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * función para redirigir a la ruta
   * @param {String} texto
   */
  const redireccionABuscar = (texto) => {
    let ruta = transformarTexto({
      nuevoSeparador: '+',
      separador: ' ',
      texto,
    });
    ruta = removerAcentos(ruta);
    history.push(ruta);
  };

  const alBuscar = (event) => {
    event.preventDefault();

    if (!busqueda) {
      enqueueSnackbar('Por favor ingrese una palabra para buscar', {
        variant: 'error',
      });
      return;
    }
    redireccionABuscar(`/busqueda/${busqueda.trim()}`);
  };

  useEffect(() => {
    if (!busqueda && busquedaUsuario) {
      const busquedaTransformada = transformarTexto({
        nuevoSeparador: ' ',
        separador: '+',
        texto: busquedaUsuario,
      });

      setBusqueda(busquedaTransformada);
    }

    return () => null;
  }, [busquedaUsuario]);

  useEffect(() => {
    if (estaEnSmartCar) {
      obtenerCategorias();
    }
  }, [estaEnSmartCar]);

  useEffect(() => {
    if (categoriaSeleccionada) {
      const palabraSinEspacios = transformarTexto({
        nuevoSeparador: '+',
        separador: ' ',
        texto: categoriaSeleccionada.value,
      });
      const palarabaSinAcentros = removerAcentos(palabraSinEspacios);
      history.push(`${LOCACION_SMART_CAR}/${palarabaSinAcentros}`);
    }
  }, [categoriaSeleccionada]);

  useEffect(() => {
    if (!categoriaSeleccionada && busquedaSelector) {
      const textoSelector = transformarTexto({
        nuevoSeparador: ' ',
        separador: '+',
        texto: busquedaSelector,
      });
      setCategoriaSeleccionada({
        label: textoSelector,
        value: textoSelector,
      });
    }
  }, [busquedaSelector]);

  const buscadorInput = (
    <FormControl variant="outlined" fullWidth>
      <form onSubmit={alBuscar}>
        <InputLabel htmlFor="outlined-adornment-busqueda">
          Busca tu producto aquí
        </InputLabel>
        <OutlinedInput
          required
          fullWidth
          type="text"
          id="outlined-adornment-busqueda"
          value={busqueda}
          autoFocus
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ backgroundColor: '#ffffff' }}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={alBuscar}
                edge="end"
                type="submit"
                color="primary"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          )}
          labelWidth={180}
        />
      </form>
    </FormControl>
  );

  const buscadorSelector = (
    <ReactSelect
      value={categoriaSeleccionada}
      onChange={setCategoriaSeleccionada}
      options={categorias}
      placeholder={loading ? 'Cargando Categorias...' : 'Seleccione una categoria para empaquetar su producto'}
      autoFocus
      isLoading={loading}
    />
  );

  const formularioBusqueda = estaEnSmartCar ? buscadorSelector : buscadorInput;
  return (
    <ThemeProvider theme={themeSelectores}>
      {formularioBusqueda}
    </ThemeProvider>
  );
};

export default Buscador;
