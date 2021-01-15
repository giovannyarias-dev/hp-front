import { iActionReducer } from '../interfaces/iActionReducer';
import { eTypes } from '../enums/eTypes';
import { iAuth } from '../interfaces/iAuth';
import { iUser } from '../interfaces/iUser';

export const authReducer = ( state = { logged: false }, action: iActionReducer ): iAuth => {
  
  switch ( action.type ) {
    
  case eTypes.LOGIN:
    return {
      ...state,
      user: action.payload as iUser,
      logged: true
    };
    break;

  case eTypes.LOGOUT:
    return {
      logged: false
    };
    break;

  default:
    return state;
  }
};
