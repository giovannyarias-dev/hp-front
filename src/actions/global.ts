import { eTypes } from '../enums/eTypes';
import { tokenFetch } from '../helpers/fetch';
import { iTeamUser } from '../interfaces/iTeamUser';

export const getTeamsByUser = () => {
  return async( dispatch:any ) => {
    const teams = await tokenFetch('teams/user', {}, 'GET');
    dispatch( setTeamsByUser( teams.res ));
  };
};

export const setTeamsByUser = ( teams: iTeamUser[] ) => ({
  type: eTypes.SET_TEAMS_USER,
  payload: teams
});
