import React from 'react';
import styled from 'styled-components';

import { staticPath } from '../../utils/staticPath';
import { colors, sizes } from '../../theme';

export const UserIcon = ({ ...props }) => {
  return (
    <Icon {...props}>
      <img src={staticPath('/svg/user.svg')} alt="User" width="18" />
    </Icon>
  );
};

const Icon = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray};
  border-radius: 50%;
  transition: ${sizes.transition.default};

  &:hover {
    opacity: ${sizes.opacity.default};
  }
`;
