import React from 'react';
import { useSelector } from 'react-redux';

import { AccountBalanceView } from './View';

export const AccountBalance = () => {
  const { isLoading } = useSelector((state) => state.accountBalance);

  return <AccountBalanceView loading={isLoading} />;
};
