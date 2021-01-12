/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

  const { socket, online } = useSocket('http://localhost:8080');
  //const { socket, online } = useSocket('Happyproject-env.eba-h4fxhnae.us-east-2.elasticbeanstalk.com');

  return (
    <SocketContext.Provider value={{ socket, online }}>
      { children}
    </SocketContext.Provider>
  );
};
