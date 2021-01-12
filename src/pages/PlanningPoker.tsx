import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlanningPokerResult } from '../components/PlanningPokerResult';

import { PokerCardGrid } from '../components/PokerCardGrid';
import { UserAvatar } from '../components/UserAvatar';
import { AuthContext } from '../context/AuthContext';
import { SocketContext } from '../context/SocketContext';
import { socketTypes } from '../types/socketTypes';
import iUser from '../interfaces/iUser';

const AvatarListBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0 10px 0;
  background: rgb(28,0,83);
  background: linear-gradient(0deg, rgba(28,0,83,1) 11%, rgba(76, 0, 179,1) 100%);
  color: #fff;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PlanningPoker = (): JSX.Element => {

  const { user } = useContext( AuthContext );

  const { socket } = useContext( SocketContext );
  const [ users, setUsers ] = useState([] as iUser[]);
  const [ showEffort, setShowEffort ] = useState( false );
  const [ effort, setEffort ] = useState( null as any );
  const [ isTeamUser, setIsTeamUser] = useState( true );
  const [ userEmail ] = useState( user._email );

  useEffect(() => {

    socket.emit(socketTypes.emit.selectUser, { email: userEmail });

    socket.on(socketTypes.on.currentUsers, ( users: iUser[] ) => {
      setUsers(users);
      users.filter( (user: iUser) => user._email === userEmail).map(
        (userFiltered: iUser) => {
          setEffort( userFiltered._effort );

          if( userFiltered._role !== 'team' )
            setIsTeamUser(false);

          return userFiltered;
        }
      );
    });

    socket.on( socketTypes.on.revealCards, ( data: any ) => {
      setShowEffort( data.reveal );
      setEffort( null );
    });

    return () => socket.off(socketTypes.on.revealCards);

  }, [ socket, userEmail ]);

  const updatedEffort = ( effort: string ) => {
    setEffort( effort );
    socket.emit( socketTypes.emit.setEffort, { email: userEmail, effort } );
  };

  const cleanEffort = () => {
    socket.emit( socketTypes.emit.cleanEffort );
  };

  const revealCards = () => {
    socket.emit( socketTypes.emit.revealCards );
  };

  return (
    <PageBox>
      <AvatarListBox>
        { users.filter( (user: iUser) => user._role === 'team' ).map( (user: iUser) => {
          return <UserAvatar key={ user._id } user={ user } showEffort={ showEffort } />;
        })}
      </AvatarListBox>
      <div className='container'>
        { isTeamUser && !showEffort && <PokerCardGrid effort={ effort } onClickCard={ updatedEffort } /> }
        { showEffort && <PlanningPokerResult users={ users } /> }
        { !isTeamUser && !showEffort && <ButtonBox><Button onClick={ revealCards }>Mostrar resultado</Button></ButtonBox> }
        { !isTeamUser && showEffort && <ButtonBox><Button onClick={ cleanEffort } >Estimar nuevamente</Button></ButtonBox> }
      </div>
    </PageBox>
  );
};
