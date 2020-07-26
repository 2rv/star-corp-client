import React from 'react';
import styled from 'styled-components';

import { Skeleton } from '../../components/skeletons';
import { Text } from '../../components/Text';
import { Balance } from './BalanceAmount';
import { spacing } from '../../theme';

export const SkeletonList = () => {
  return (
    <Container>
      <Balance>
        <Text tid="PAYMENT.CREATE_FORM.BALANCE" />
      </Balance>
      <SkeletonText height={24} width={40} />
    </Container>
  );
};

const SkeletonText = styled(Skeleton)`
  margin-left: ${spacing(1)};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
