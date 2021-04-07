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
  nombreProducto, precioProducto, descripcionProducto,
  localizacion, fotoProducto, esUsado, tienda, enlaceProducto,
  classes,
}) => {
  const precio = tranformarNumeroAString(precioProducto);

  const producto = {
    nombreProducto,
    precioProducto,
    descripcionProducto,
    localizacion,
    fotoProducto,
    esUsado,
    tienda,
    enlaceProducto,
  };

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
          <Grid container>
            <Grid item xs={12}>
              <Typography noWrap variant="h5" component="h2">
                {nombreProducto}
              </Typography>

              <Typography noWrap variant="subtitle2" color="textSecondary">
                {`${tienda} - $${precio}`}
              </Typography>

              <hr style={{ height: '1px' }} />

            </Grid>
            <Grid item xs={12}>
              <div style={{ height: '6vw', overflowY: 'auto' }}>

                <Typography variant="body2" component="p">
                  {descripcionProducto}
                </Typography>
              </div>
            </Grid>
          </Grid>

        </CardContent>
        <CardActions style={{ float: 'right' }}>
          <div style={{ float: 'left !important' }}>
            <Link href={enlaceProducto} target="_blank" onClick={() => crearElementoVisto(producto)}>
              {`Ir a ${tienda}`}
            </Link>
          </div>

          <div style={{
            alignItems: 'right',
          }}
          >
            <IconButton size="small" color="primary">
              <Share />
            </IconButton>
            <IconButton size="small" color="primary">
              <Save />
            </IconButton>
          </div>

        </CardActions>
      </Card>
    </>
  );
};

CardResultado.propTypes = {
  nombreProducto: PropTypes.string.isRequired,
  precioProducto: PropTypes.number.isRequired,
  descripcionProducto: PropTypes.string.isRequired,
  localizacion: PropTypes.string.isRequired,
  fotoProducto: PropTypes.string.isRequired,
  esUsado: PropTypes.bool.isRequired,
  tienda: PropTypes.string.isRequired,
  enlaceProducto: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardResultadoEstilo)(CardResultado);
