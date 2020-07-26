import React from 'react';
import styled from 'styled-components';

import { ListGrid } from '../../components/grids';
import { Text } from '../../components/Text';

export const BalanceAmount = ({ balance }) => {
  return (
    <ListGrid>
      <Balance>
        <Text tid="PAYMENT.CREATE_FORM.BALANCE" />
        <Value>{balance}</Value>
      </Balance>
    </ListGrid>
  );
};

const Value = styled.div`
  margin-left: 5px;
`;

export const Balance = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  color: #fff;
`;
