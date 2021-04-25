import { createMuiTheme } from '@material-ui/core';

import themeLight from './themeLight';

const themeSelectores = createMuiTheme({
  ...themeLight,
  palette: {
    primary: {
      main: '#434b4d',
    },
    secondary: {
      main: '#f1ce61',
    },
  },
});

export default themeSelectores;
