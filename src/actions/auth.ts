import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { eTypes } from '../enums/eTypes';
import { iUser } from '../interfaces/iUser';
import { simpleFetch } from '../helpers/fetch';
import { iTeamUser } from '../interfaces/iTeamUser';

export const startGoogleLogin = () => {
  return async( dispatch:any ) => {

    const { user } = await firebase.auth().signInWithPopup( googleAuthProvider );

    const auth = await simpleFetch('auth', { 
      uid: user?.uid, 
      name: user?.displayName, 
      email: user?.email,  
      image: user?.photoURL
    }, 'POST');

    if ( auth.ok )
      localStorage.setItem('token', `${auth.res.token}`);

    dispatch( login( auth.res.user,  auth.res.token ));

  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: eTypes.LOGOUT
  };
};

export const login = ( user: iUser, token: string ) => ({
  type: eTypes.LOGIN,
  payload: {
    user, token
  } 
});

export const setTeamsUser = ( teams:iTeamUser[] ) => ({
  type: eTypes.SET_TEAMS_USER,
  payload: {
    teams
  } 
});
