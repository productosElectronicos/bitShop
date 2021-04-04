const paginaSuspendidaStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  loader: {
    paddingLeft: theme.spacing(1),
  },
});

export default paginaSuspendidaStyles;
