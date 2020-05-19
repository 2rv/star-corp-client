import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { colors } from '../../theme';

export const ButtonPrimary = ({ ...props }) => <StyledButtonPrimary {...props} />;

const StyledButtonPrimary = styled(Button)`
  height: 50px;
  ${({ variant, color }) =>
    variant === 'outlined'
      ? `&[disabled] {
    border-color: ${colors.gray} !important;
    color: ${colors.grayLight} !important;
  }`
      : (variant = 'contained'
          ? `
          &[disabled] {
            opacity: 0.6;
            background-color: ${colors[color]} !important;
            color: ${colors.textSecondary} !important;
          }
  `
          : null)}

  & .MuiButton-label {
    font-weight: 400;
    text-transform: none;
    font-size: 16px;
  }
`;
