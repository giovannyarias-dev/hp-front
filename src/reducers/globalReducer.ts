import { iActionReducer } from '../interfaces/iActionReducer';
import { eTypes } from '../enums/eTypes';
import { iGlobal } from '../interfaces/iGlobal';
import { iTeamUser } from '../interfaces/iTeamUser';

export const globalReducer = ( state = {}, action: iActionReducer ): iGlobal => {
  
  switch ( action.type ) {
    
  case eTypes.SET_TEAMS_USER:
    return {
      ...state,
      teamSelected: (action.payload.length === 1) ? action.payload[0] : {},
      teams: action.payload as iTeamUser[],
    };
    break;
    
  default:
    return state;
  }
};