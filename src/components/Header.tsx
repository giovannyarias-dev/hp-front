import React, { useContext } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import happyproject from '../assets/images/happyproject.svg';
import { eRoutes } from '../enums/eRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import { SocketContext } from '../context/SocketContext';
import { iState } from '../interfaces/iState';
import { eSocketEvents } from '../enums/eSocketEvents';

const Logo = styled.img`
  height: 25px;
  margin: 10px 0;
`;

const HeaderBox = styled.div`
  background-color: #4c04b2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderOptions = styled.div`
  display: flex;
  justify-content: space-between;;
`;

const ToolsBox = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const Header = (): JSX.Element => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { socket } = useContext( SocketContext );
  const { auth } = useSelector( (state: iState) => state );

  const handleSignOut = () => {
    dispatch( logout() );
    socket.emit(eSocketEvents.REMOVE_USER_PLANNING, { idUser: auth.user?.id});
    history.push( eRoutes.LOGIN );
  };

  return (
    <HeaderBox>
      <HeaderOptions className="container">
        <Logo src={ happyproject } alt='Logo happyproject' />
        <ToolsBox>
          <Tooltip title="Cerrar sesión">
            <CloseCircleOutlined onClick={ handleSignOut } />
          </Tooltip>
        </ToolsBox>
      </HeaderOptions>  
    </HeaderBox>
  );
};
