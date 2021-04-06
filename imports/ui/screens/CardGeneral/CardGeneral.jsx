import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const CardGeneral = ({ titulo, listaOfertas }) => (
  <>
    <Card>
      <CardHeader title={<span style={{ fontSize: '60%' }}>{titulo}</span>} />
    </Card>
  </>
);
CardGeneral.propTypes = {
  titulo: PropTypes.string.isRequired,
  listaOfertas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardGeneral;
