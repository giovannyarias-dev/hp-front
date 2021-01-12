import { Tooltip } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import styled from 'styled-components';
import happyproject from '../assets/images/happyproject.svg';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { routesTypes } from '../types/routesTypes';
import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';

const clientId = '789872827402-2733p91rfk5r830l2v97bbjjpclbg9qb.apps.googleusercontent.com';

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
  const { dispatch } = useContext(AuthContext);

  const onLogoutSuccess = () => {
    dispatch({
      type: types.logout
    });
    history.push(routesTypes.login);
  };

  const onFailure = () => {
    console.log('Handle filure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  });

  return (
    <HeaderBox>
      <HeaderOptions className="container">
        <Logo src={ happyproject } alt='Logo happyproject' />
        <ToolsBox>
          <Tooltip title="Cerrar sesión">
            <CloseCircleOutlined onClick={ signOut } />
          </Tooltip>
        </ToolsBox>
      </HeaderOptions>  
    </HeaderBox>
  );
};
