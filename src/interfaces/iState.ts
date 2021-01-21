import { iAuth } from './iAuth';
import { iGlobal } from './iGlobal';
import { iPlanningPoker } from './iPlanningPoker';

export interface iState {
  auth: iAuth;
  global: iGlobal;
  planningPoker: iPlanningPoker;
}
