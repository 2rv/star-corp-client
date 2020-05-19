import React from 'react';
import styled from 'styled-components';

import { staticPath } from '../../utils/staticPath';
import {PageLayout} from '.';

export const AuthLayout = ({ ...props }) => {
  return <Container {...props} />;
};

const Container = styled(PageLayout)`
  background-image: url(${staticPath('/png/main-bg.png')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: 
`;
