import iActionReducer from '../interfaces/iActionReducer';
import { types } from '../types/types';

export const authReducer = ( state = {}, action: iActionReducer ): object => {
  switch ( action.type ) {
  case types.login:
    return {
      ...action.payload,
      _logged: true
    };
    break;
  case types.logout:
    return {
      _logged: false
    };
    break;

  default:
    return state;
  }
};
