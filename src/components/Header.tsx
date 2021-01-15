import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import happyproject from '../assets/images/happyproject.svg';
import { eRoutes } from '../enums/eRoutes';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth';

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

  const handleSignOut = () => {
    dispatch( logout() );
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
