import { iUser } from './iUser';

export interface iAuth {
  logged: boolean,
  user?: iUser,
  token?: string
}
