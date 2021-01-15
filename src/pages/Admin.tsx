import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { eSocketEvents } from '../enums/eSocketEvents';

export const Admin = (): JSX.Element => {

  const { socket } = useContext(SocketContext);

  const cleanEffort = () => {
    socket.emit( eSocketEvents.CLEAN_EFFORT );
  };

  const revealCards = () => {
    socket.emit( eSocketEvents.REVEAL_CARDS );
  };

  return (
    <div>
      <button onClick={() => cleanEffort()}>Limpiar votacion</button>
      <button onClick={() => revealCards()}>Mostrar cartas</button>
    </div>
  );
};
