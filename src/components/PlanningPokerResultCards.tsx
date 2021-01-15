import { Col, Row, Avatar } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { iUser } from '../interfaces/iUser';

import { PokerCard } from './PokerCard';

type Props = {
  users: iUser[]
};

const cardList = [
  { number: '1', effort: '0' },
  { number: '2', effort: '1/2' },
  { number: '3', effort: '1' },
  { number: '4', effort: '2' },
  { number: '5', effort: '3' },
  { number: '6', effort: '5' },
  { number: '7', effort: '8' },
  { number: '8', effort: '13' },
  { number: '9', effort: '20' },
  { number: '10', effort: '40' },
  { number: '11', effort: '100' },
  { number: '12', effort: '?' },
  { number: '13', effort: 'Coffee' },
];

const PokerCardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RowFlex = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const PlanningPokerResultCards = ({ users }: Props): JSX.Element => {

  const effortSelected:Array<string> = [];
  users.forEach(user => {
    if( user.effort && !effortSelected.some(effort => effort === user.effort) ) {
      effortSelected.push(user.effort);
    } 
  });

  const getAvatarGroup = (effort: string, users: iUser[]) => {

    const avatarUsers = users.map( (user) => {
      if( user.effort === effort ) {
        const imageUser = require(`../assets/users/${ user.image }`).default;
        return <Avatar size={30} src={ imageUser } key={ `avatar${user.id}` }/>;
      }
      return null;
    });

    const avatarGroup = <Avatar.Group maxCount={2} size={30} style={{ marginLeft: '10px' }} maxStyle={{ color: '#fff', backgroundColor: '#f51993'}}>
      { avatarUsers }
    </Avatar.Group>;

    return avatarGroup;
  };

  return (
    <RowFlex>
      { effortSelected.map( effort => {
        const cardNumber = cardList.filter( card => card.effort === effort )[0].number;
        return <Col key={ `cardr${ cardNumber }` } > 
          <PokerCardBox>
            <PokerCard cardNumber={ cardNumber } active={ false } />
            { getAvatarGroup(effort, users) }
          </PokerCardBox>
        </Col>;
      }) }
    </RowFlex>
  );
};
