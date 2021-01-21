import { iActionReducer } from '../interfaces/iActionReducer';
import { eTypes } from '../enums/eTypes';
import { iPlanningPoker } from '../interfaces/iPlanningPoker';

export const planningPokerReducer = ( state = { showEffort:false }, action: iActionReducer ): iPlanningPoker => {
  
  switch ( action.type ) {
    
  case eTypes.PP_SET_EFFORT:
    return {
      ...state,
      effort: action.payload
    };
    break;

  case eTypes.PP_SET_USERS_IN_PLANNING:
    return {
      ...state,
      users: action.payload
    };
    break;

  case eTypes.PP_SET_SHOW_EFFORT:
    return {
      ...state,
      showEffort: action.payload
    };
    break;

  default:
    return state;
  }
};
