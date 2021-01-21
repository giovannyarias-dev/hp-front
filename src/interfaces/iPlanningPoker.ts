import { iUser } from './iUser';

export interface iPlanningPoker {
  users?: iUser[],
  showEffort: boolean,
  effort?: string,
}
