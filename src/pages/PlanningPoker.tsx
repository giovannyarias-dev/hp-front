import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { PlanningPokerResult } from '../components/PlanningPokerResult';
import { PokerCardGrid } from '../components/PokerCardGrid';
import { UserAvatar } from '../components/UserAvatar';
import { SocketContext } from '../context/SocketContext';
import { eSocketEvents } from '../enums/eSocketEvents';
import { iState } from '../interfaces/iState';
import { iUser } from '../interfaces/iUser';

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

  const { auth } = useSelector( (state: iState) => state );
  const { socket } = useContext( SocketContext );

  const [ users, setUsers ] = useState([] as iUser[]);
  const [ showEffort, setShowEffort ] = useState( false );
  const [ effort, setEffort ] = useState( null as any );
  const [ isTeamUser, setIsTeamUser] = useState( true );

  useEffect(() => {

    socket.emit( eSocketEvents.SELECT_USER, { email: auth.user?.email });

    socket.on( eSocketEvents.CURRENT_USERS, ( users: iUser[] ) => {
      setUsers(users);
      users.filter( (user: iUser) => user.email === auth.user?.email).map(
        (userFiltered: iUser) => {
          setEffort( userFiltered.effort );

          if( userFiltered.role !== 'team' )
            setIsTeamUser(false);

          return userFiltered;
        }
      );
    });

    socket.on( eSocketEvents.REVEAL_CARDS, ( data: any ) => {
      setShowEffort( data.reveal );
      setEffort( null );
    });

    return () => socket.off( eSocketEvents.REVEAL_CARDS );

  }, [ socket, auth.user?.email ]);

  const updatedEffort = ( effort: string ) => {
    setEffort( effort );
    socket.emit( eSocketEvents.SET_EFFORT, { email: auth.user?.email, effort } );
  };

  const cleanEffort = () => {
    socket.emit( eSocketEvents.CLEAN_EFFORT );
  };

  const revealCards = () => {
    socket.emit( eSocketEvents.REVEAL_CARDS );
  };

  return (
    <PageBox>
      <AvatarListBox>
        { users.filter( (user: iUser) => user.role === 'team' ).map( (user: iUser) => {
          return <UserAvatar key={ user.id } user={ user } showEffort={ showEffort } />;
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
