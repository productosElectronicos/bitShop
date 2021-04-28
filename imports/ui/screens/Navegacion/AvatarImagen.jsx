import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    width: theme.spacing(15),
    height: theme.spacing(15),
    cursor: 'pointer',
  },
  textItemAlign: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));

const AvatarImagen = () => {
  const history = useHistory();

  const classes = useStyles();

  const redireccionAHome = () => {
    history.push('/inicio');
  };
  return (
    <div className={classes.textItemAlign}>
      <Avatar
        className={classes.avatar}
        alt="BitShop"
        src="/images/BITSHOP.png"
        variant="rounded"
        onClick={() => redireccionAHome()}
      />
    </div>
  );
};

export default AvatarImagen;
