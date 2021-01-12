/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../auth/authReducer';

export const AuthContext = createContext();

const init = () => {
  return JSON.parse( localStorage.getItem('user') ) || { _logged: false };
};

export const AuthProvider = ({ children }) => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify( user ));
  }, [ user ]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      { children}
    </AuthContext.Provider>
  );
};