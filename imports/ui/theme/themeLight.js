import { createMuiTheme } from '@material-ui/core';

const fonts = 'Ropa Sans';

const themeLight = createMuiTheme({
  typography: {
    fontFamily: fonts,
  },
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
    selectoresFontColor: {
      main: '#1C1C1C',
    },
  },
});

export default themeLight;
