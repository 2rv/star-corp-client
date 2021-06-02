import { required, validator } from './index';
import { REPORT } from '../constants/fields';

const config = {
  [REPORT.NICKNAME]: [required],
  [REPORT.DESCRIPTION]: [required],
};

export const validate = (values) => validator(values, config);
