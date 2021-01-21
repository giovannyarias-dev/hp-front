import { eTypes } from '../enums/eTypes';
import { iUser } from '../interfaces/iUser';

export const setEffort = ( effort: string | null | undefined ) => ({
  type: eTypes.PP_SET_EFFORT,
  payload: effort
});

export const setUsersInPLanning = ( users: iUser[] ) => ({
  type: eTypes.PP_SET_USERS_IN_PLANNING,
  payload: users
});

export const setShowEffort = ( showEffort: boolean ) => ({
  type: eTypes.PP_SET_SHOW_EFFORT,
  payload: showEffort
});