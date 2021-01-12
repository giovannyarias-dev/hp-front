import React from 'react';
import styled from 'styled-components';

type PokerCardProps = {
  cardNumber: string,
  active: boolean;
};

const Card = styled.div<{ active?:boolean }>`
  background-color: #fff;
  width: 120px;
  margin: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  border-radius: 8px;
  cursor: pointer;

  ${({ active }) => active && `
    background-color: #4c00b3;
  `}
`;

const ImageCard = styled.img`
  width: 100%;
`;

export const PokerCard = ({ cardNumber, active }: PokerCardProps): JSX.Element => {
  const imageCard = require(`../assets/planning-poker/card${ cardNumber }.svg`).default;
  return (
    <Card active={ active } >
      <ImageCard src={ imageCard } alt="Planning Card" />
    </Card>
  );
};
