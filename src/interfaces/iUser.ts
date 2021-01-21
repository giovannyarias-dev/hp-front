import { iTeamUser } from './iTeamUser';

export interface iUser {
  id?: string;
  uid?: string;
  name: string | null | undefined;
  image?: string;
  invited?: boolean;
  role?: string;
  email: string | null | undefined;
  effort?: string | null;
  logged?: boolean;

  selectedTeam?: number;
  teams?: iTeamUser[];
}
