import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';

import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import {
  ANCHOR_ORIGIN, AUTO_HIDE_DURATION, MAX_SNACK, PREVENT_DUPLICATE,
} from '../configs/snackbarOptions';

import Routes from '../routes';
import themeLight from '../theme/themeLight';

const App = () => {
  useTracker(() => Meteor.userId());

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={ANCHOR_ORIGIN}
        maxSnack={MAX_SNACK}
        preventDuplicate={PREVENT_DUPLICATE}
        autoHideDuration={AUTO_HIDE_DURATION}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
