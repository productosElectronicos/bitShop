/* eslint-disable react/jsx-props-no-spreading */
import { Route } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

const CommonComponent = ({ component: Component, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) => (<Component {...props} />)}
  />
);

CommonComponent.propTypes = {
  component: PropTypes.func.isRequired,
};

export default CommonComponent;
