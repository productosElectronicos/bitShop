/* eslint-disable react/jsx-props-no-spreading */
import { Meteor } from 'meteor/meteor';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

const PrivateComponent = ({ component: Component, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) => (
      Meteor.userId()
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

PrivateComponent.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateComponent;
