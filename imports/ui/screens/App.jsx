import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import React from 'react';

import {
  ANCHOR_ORIGIN, AUTO_HIDE_DURATION, MAX_SNACK, PREVENT_DUPLICATE,
} from '../configs/snackbarOptions';

import Routes from '../routes';

const App = () => {
  useTracker(() => Meteor.userId());

  return (
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
  );
};

export default App;
