import { PAYMENT } from '../constants/fields';

export const convertPaymentData = (data) => ({
  [PAYMENT.PAYMENT_VALUE]: data.paymentValue,
});
