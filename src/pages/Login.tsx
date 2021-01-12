import React, { useContext } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
//import { useGoogleLogin } from 'react-google-login';
import { GoogleOutlined } from '@ant-design/icons';
import { SocketContext } from '../context/SocketContext';
import styled from 'styled-components';

import happyproject from '../assets/images/happyproject.svg';
import happyprojectFace from '../assets/images/happyproject-face.svg';
import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';
import iUser from '../interfaces/iUser';
import { socketTypes } from '../types/socketTypes';
import { routesTypes } from '../types/routesTypes';

//const clientId = '789872827402-2733p91rfk5r830l2v97bbjjpclbg9qb.apps.googleusercontent.com';

const Happyproject = styled.div`
  width: 250px;
  margin: 20px 0;
`;

const HappyprojectFace = styled.div`
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

  const { socket } = useContext( SocketContext );
  const { dispatch } = useContext( AuthContext );
  const history = useHistory();

  // const onSuccess = ( res: any ) => {
  //   socket.emit(socketTypes.emit.login, { email: res.profileObj.email, name: res.profileObj.name});
  //   localStorage.setItem('email', res.profileObj.email);
  //   //localStorage.setItem('imageUrl', res.profileObj.imageUrl);
  //   history.push(routesTypes.planning);
  // };

  // const onFailure = ( res: any ) => {
  //   console.log('Login failed: res', res);
  // };

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  //   isSignedIn: true,
  //   accessType: 'offline'
  // });

  const signInTest = () =>{
    const user:iUser = {
      _email: 'cesarg.arias@avaldigitallabs.com',
      _name: 'Giovanny',
      _image: ''
    };
    dispatch({
      type: types.login,
      payload: user
    });
    socket.emit(socketTypes.emit.login, user);
    history.push(routesTypes.planning);
  };

  return (
    <LoginBox>
      <HappyprojectFace>
        <img src={ happyprojectFace } alt='happyproject' width='100%' />
      </HappyprojectFace>
      <Happyproject>
        <img src={ happyproject } alt='happyproject' width='100%'/>
      </Happyproject>
      {/* <Button onClick={ signIn }> */}
      <Button onClick={ signInTest }>
        <GoogleOutlined />
        Sign in with Google
      </Button>
    </LoginBox>
  );
};
