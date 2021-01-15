import React from 'react';
import { PlanningPokerResultCards } from './PlanningPokerResultCards';

import { iUser } from '../interfaces/iUser';

type PlanningPokerResultProps = {
  users: iUser[];
}

export const PlanningPokerResult = ({ users }: PlanningPokerResultProps): JSX.Element => {
  return (
    <PlanningPokerResultCards users={ users } />
  );
};
