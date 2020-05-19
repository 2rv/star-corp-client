import React from 'react';
import styled from 'styled-components';

import { colors, sizes } from '../../theme';

export const UserIcon = ({ ...props }) => {
  return (
    <Icon {...props}>
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.2222 17.4447V15.6669C15.2222 14.7239 14.8476 13.8195 14.1808 13.1527C13.514 12.4859 12.6097 12.1113 11.6667 12.1113H4.55556C3.61256 12.1113 2.70819 12.4859 2.0414 13.1527C1.3746 13.8195 1 14.7239 1 15.6669V17.4447"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.11122 8.11111C10.0749 8.11111 11.6668 6.51923 11.6668 4.55556C11.6668 2.59188 10.0749 1 8.11122 1C6.14754 1 4.55566 2.59188 4.55566 4.55556C4.55566 6.51923 6.14754 8.11111 8.11122 8.11111Z"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

const Icon = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  transition: ${sizes.transition.default};

  & svg path {
    stroke: ;
  }

  &:hover {
    opacity: ${sizes.opacity.default};
  }
`;
