import React, { useState } from 'react';

// material ui core
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/**
 * constante para el manejo de los filtros
 * @constant
 * @type {Number[]}
 * @constant
 */
const LISTADO_FILTROS = [
  1, 2, 3,
];

const Filtros = () => {
  const [chequeado, setChequeado] = useState(false);
  return (
    <>
      <Grid container spacing={2}>
        {LISTADO_FILTROS.map((filtro) => (
          <Grid item xs={12} key={filtro}>
            <Typography>
              <b>{`Filtro # ${filtro}`}</b>
            </Typography>
            <Card>
              <CardContent>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={chequeado}
                      onChange={(event) => setChequeado(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  )}
                  labelPlacement="start"
                  label="Filtro dinamico 1"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={chequeado}
                      onChange={(event) => setChequeado(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  )}
                  labelPlacement="start"
                  label="Filtro dinamico 2"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={chequeado}
                      onChange={(event) => setChequeado(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  )}
                  labelPlacement="start"
                  label="Filtro dinamico 3"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Filtros;
