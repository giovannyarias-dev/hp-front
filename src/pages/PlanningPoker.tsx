import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTeamsByUser } from '../actions/global';
import { setEffort, setUsersInPLanning, setShowEffort } from '../actions/planningPoker';
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

  const dispatch = useDispatch();
  const { auth, planningPoker, global } = useSelector( (state: iState) => state );
  const { socket } = useContext( SocketContext );

  useEffect(() => {
    if ( !planningPoker.users?.some( user => user.id === auth.user?.id ) ) {

      dispatch( getTeamsByUser() );
      socket.emit( eSocketEvents.ADD_USER_PLANNING, { user:auth.user, isTeamUser: true } );
      socket.on( eSocketEvents.CURRENT_USERS, ( users: iUser[] ) => {
        dispatch( setUsersInPLanning( users ));  
      });
      socket.on( eSocketEvents.REVEAL_CARDS, ( data: any ) => {
        dispatch( setShowEffort( data.reveal ) );
        dispatch( setEffort( '' ) );
      });
    }
  }, []);

  const haveRole = ( role:string ) => {
    return JSON.parse( global.teamSelected?.roles || '[]').some( (roleUser:string) => roleUser===role );
  };

  const cleanEffort = () => {
    socket.emit( eSocketEvents.CLEAN_EFFORT );
  };

  const revealCards = () => {
    socket.emit( eSocketEvents.REVEAL_CARDS );
  };

  return (
    <PageBox>
      { <AvatarListBox>
        {
          planningPoker.users?.filter( (user: iUser) => user.isTeamUser ).map( (user: iUser) => {
            return <UserAvatar key={ `avatar${user.id}` } user={ user } showEffort={ planningPoker.showEffort } />;
          })}
      </AvatarListBox> }
      <div className='container'>
        { haveRole('TEAM') && !planningPoker.showEffort && <PokerCardGrid /> }
        { planningPoker.showEffort && <PlanningPokerResult /> }
        { haveRole('SCRUM') && !planningPoker.showEffort && <ButtonBox><Button onClick={ revealCards }>Mostrar resultado</Button></ButtonBox> }
        { haveRole('SCRUM') && planningPoker.showEffort && <ButtonBox><Button onClick={ cleanEffort } >Estimar nuevamente</Button></ButtonBox> }
      </div>
    </PageBox>
  );
};
