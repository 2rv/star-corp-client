import { SIGNUP } from '../constants/fields';

export const convertSignupData = ({ login, password, nickname, captcha }) => ({
  [SIGNUP.LOGIN]: login,
  [SIGNUP.NICKNAME]: nickname,
  [SIGNUP.PASSWORD]: password,
  [SIGNUP.CAPTCHA]: captcha,
});
