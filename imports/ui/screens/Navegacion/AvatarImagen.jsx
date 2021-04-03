/* eslint-disable react/prop-types */
import { useHistory } from 'react-router-dom';

import React from 'react';

import Avatar from '@material-ui/core/Avatar';

const AvatarImagen = ({ classes }) => {
  const history = useHistory();

  const redireccionAHome = () => {
    history.push('/inicio');
  };
  return (
    <div className={classes.textItemAlign}>
      <Avatar
        className={classes.avatar}
        alt="BitShop"
        src="images/BITSHOP.png"
        variant="rounded"
        onClick={() => redireccionAHome()}
      />
    </div>
  );
};

export default AvatarImagen;
