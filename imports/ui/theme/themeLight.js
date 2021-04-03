import { createMuiTheme } from '@material-ui/core';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: '#ABD8CD',
    },
    primary: {
      main: '#f1ce61',
    },
    error: {
      main: '#f83245',
    },
    backgroundColor: {
      main: '#ABD8CD',
    },
  },
});

export default themeLight;
