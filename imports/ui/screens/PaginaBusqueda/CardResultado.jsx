import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// material ui icons
import Save from '@material-ui/icons/Save';
import Share from '@material-ui/icons/Share';

import { tranformarNumeroAString } from '../../../commons/utilidades.js';

import cardResultadoEstilo from './cardResultadoEstilo.jsx';
import { crearElementoVisto } from './helperPaginaBusqueda.js';

const CardResultado = ({
  nombreProducto, precioProducto,
  localizacion, fotoProducto, esUsado, productoId, tienda, enlaceProducto,
  classes,
}) => {
  const precio = tranformarNumeroAString(precioProducto || 0);

  const producto = {
    productoId,
    tienda,
    enlaceProducto,
  };

  const { estaConectadoUnUsuario } = useTracker(() => {
    // verificamos el usuario
    const usuarioId = Meteor.userId();

    // agregamos un booleano que define el cambio
    const estaConectado = !!usuarioId;

    return {
      estaConectadoUnUsuario: estaConectado,
    };
  });

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          className={classes.media}
          image={fotoProducto}
          title={`${nombreProducto} en ${localizacion} ${esUsado ? 'Usado' : ''}`}
        />
        <CardContent>
          <hr style={{ height: '1px' }} />
          <Grid container>
            <Grid item xs={12}>
              <Typography noWrap variant="h5" component="h2">
                {nombreProducto}
              </Typography>

              <Typography noWrap variant="subtitle2" color="textSecondary">
                {`$${precio} - ${tienda}`}
              </Typography>
            </Grid>
          </Grid>

        </CardContent>
        <CardActions style={{ float: 'right' }}>
          <div style={{ float: 'left !important' }}>
            <Link
              href={enlaceProducto}
              target="_blank"
              onClick={() => (estaConectadoUnUsuario ? crearElementoVisto(producto) : null)}
            >
              Ir a tienda
            </Link>
          </div>

          <div style={{
            alignItems: 'right',
          }}
          >
            <IconButton size="small" color="primary">
              <Share />
            </IconButton>
            {estaConectadoUnUsuario
              ? (
                <IconButton size="small" color="primary">
                  <Save />
                </IconButton>
              )
              : null}
          </div>

        </CardActions>
      </Card>
    </>
  );
};
CardResultado.defaultProps = {
  productoId: null,
  localizacion: null,
  esUsado: null,
};

CardResultado.propTypes = {
  nombreProducto: PropTypes.string.isRequired,
  precioProducto: PropTypes.number.isRequired,
  productoId: PropTypes.string,
  localizacion: PropTypes.string,
  fotoProducto: PropTypes.string.isRequired,
  esUsado: PropTypes.bool,
  tienda: PropTypes.string.isRequired,
  enlaceProducto: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardResultadoEstilo)(CardResultado);
