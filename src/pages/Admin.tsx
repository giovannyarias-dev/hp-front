import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { socketTypes } from '../types/socketTypes';

export const Admin = (): JSX.Element => {

  const { socket } = useContext(SocketContext);

  const cleanEffort = () => {
    socket.emit( socketTypes.emit.cleanEffort );
  };

  const revealCards = () => {
    socket.emit( socketTypes.emit.revealCards );
  };

  return (
    <div>
      <button onClick={() => cleanEffort()}>Limpiar votacion</button>
      <button onClick={() => revealCards()}>Mostrar cartas</button>
    </div>
  );
};
