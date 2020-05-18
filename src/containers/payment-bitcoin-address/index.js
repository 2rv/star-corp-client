import React from 'react';
import { useSelector } from 'react-redux';

import { PaymentBitcoinAddressView } from './View';

export const PaymentBitcoinAddress = () => {
  const { isLoading } = useSelector((state) => state.paymentBitcoinAddress);
  return <PaymentBitcoinAddressView loading={isLoading} />;
};
