import { required, validator, minNumber, maxNumber } from './index';
import { PAYMENT } from '../constants/fields';

const config = {
  [PAYMENT.PAYMENT_VALUE]: [required, minNumber(50), maxNumber(100000)],
};

export const validate = (values) => validator(values, config);
