import { required, validator, maxLength, minLength, passwordRepeat } from './index';
import { SETTINGS_UPDATE_PASSWORD } from '../constants/fields';

const config = {
  [SETTINGS_UPDATE_PASSWORD.PASSWORD]: [required, maxLength(100), minLength(8)],
  [SETTINGS_UPDATE_PASSWORD.REPEAT_PASSWORD]: [required, passwordRepeat(SETTINGS_UPDATE_PASSWORD.PASSWORD)],
};

export const validate = (values) => validator(values, config);
