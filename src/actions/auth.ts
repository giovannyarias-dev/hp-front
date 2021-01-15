import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { eTypes } from '../enums/eTypes';
import { iUser } from '../interfaces/iUser';

export const startGoogleLogin = () => {
  return ( dispatch:any ) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({ user }) => {
        dispatch( login( { 
          uid: user?.uid, 
          name: user?.displayName, 
          email: user?.email 
        }));
      });
  };
};

export const logout = () => ({
  type: eTypes.LOGOUT
});

export const login = ( user: iUser ) => ({
  type: eTypes.LOGIN,
  payload: user
});
