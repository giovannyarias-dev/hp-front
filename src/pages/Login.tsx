import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';
import { useHistory } from 'react-router-dom';
import { eRoutes } from '../enums/eRoutes';
import { iState } from '../interfaces/iState';
import happyproject from '../assets/images/happyproject.svg';
import happyprojectFace from '../assets/images/happyproject-face.svg';

const LogoHappyproject = styled.div`
  width: 250px;
  margin: 20px 0;
`;

const LogoHappyprojectFace = styled.div`
  width: 100px;
`;

const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(28,0,83,1) 11%, rgba(76, 0, 179,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Login = (): JSX.Element => {

  const dispatch = useDispatch();
  const { auth } = useSelector( ( state: iState ) => state );
  const history = useHistory();

  const handleGoogleSignIn = () => {
    dispatch( startGoogleLogin() );
  };

  useEffect(() => {
    if( auth.logged ) {
      history.replace( eRoutes.PLANNING );
    }
  }, [ auth ]);

  return (
    <LoginBox>
      <LogoHappyprojectFace>
        <img src={ happyprojectFace } alt='happyproject' />
      </LogoHappyprojectFace>
      <LogoHappyproject>
        <img src={ happyproject } alt='happyproject' />
      </LogoHappyproject>
      <Button onClick={ handleGoogleSignIn }>
        <GoogleOutlined />
        Sign in with Google
      </Button>
    </LoginBox>
  );
};
