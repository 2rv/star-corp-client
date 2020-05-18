import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { colors } from '../../theme';

export const ButtonPrimary = ({ ...props }) => <StyledButtomPrimary {...props} />;

const StyledButtomPrimary = styled(Button)`
  height: 50px;
  &[disabled] {
    border-color: ${colors.gray} !important;
    color: ${colors.textGray} !important;
  }
  & .MuiButton-label {
    font-weight: 400;
    text-transform: none;
    font-size: 16px;
  }
`;
