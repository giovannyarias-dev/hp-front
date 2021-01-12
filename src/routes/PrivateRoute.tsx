import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routesTypes } from '../types/routesTypes';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  path: path
}: any ) => {
  return (
    <Route exact path={ path }
      component={ (props: any) => (
        isAuthenticated
          ? <Component { ...props } />
          : <Redirect to={ routesTypes.login } />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};