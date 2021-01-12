import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import { PokerCard } from './PokerCard';

type PokerCardGridProps = {
  effort: string,
  onClickCard: Function;
};

type Card = {
  number: string,
  effort: string;
};

const PokerCardBox = styled.div`
  display: flex;
  justify-content: center;
`;

const RowFlex = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

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
  //{ number: '12', effort: '?' },
  //{ number: '13', effort: 'Coffee' },
];

export const PokerCardGrid = ({ effort, onClickCard }: PokerCardGridProps): JSX.Element => {
  return (
    <RowFlex>
      { cardList.map( ( card: Card ) => {
        return <Col className='poker-card-box' key={ `card${ card.number }` } >
          <PokerCardBox onClick={ () => { onClickCard( card.effort ) }} key={ `card2${ card.number }` }>
            <PokerCard cardNumber={ card.number } active={ effort === card.effort ? true : false} />
          </PokerCardBox>
        </Col>;
      })}
    </RowFlex>
  );
};
