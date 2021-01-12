import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';
import Icon from './Icon';
import iUser from '../interfaces/iUser';

const AvatarBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconCheckBox = styled.div`
  position: absolute;
  color: #fff;
  background-color: #ff006a;
  width: 80px;
  height: 80px;
  opacity: 0.8;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

type UserAvatarProps = {
  user: iUser,
  showEffort: boolean
}

export const UserAvatar = ({ user, showEffort }: UserAvatarProps): JSX.Element => {

  const imageUser = require(`../assets/users/${ user._image }`).default;

  const getOverflow = () => {
    let overflow: JSX.Element | string = '';
    if ( user._effort ) {
      if ( showEffort ) {
        overflow = <IconCheckBox> { user._effort } </IconCheckBox>;
      } else {
        overflow = <IconCheckBox>
          <Icon svg="check" classes="svg-icon icon-m"/>
        </IconCheckBox>;
      }
    }
    return overflow;
  };
  
  return (
    <AvatarBox>
      <Avatar size={ 80 } src={ imageUser } />
      { getOverflow() }
      { user._name.split(' ')[0] }
    </AvatarBox>
  );
};
