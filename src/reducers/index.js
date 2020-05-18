import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navigation from './navigation';
import auth from './auth';
import login from './login';
import signup from './signup';
import pgpConfirm from './pgpConfirm';
import settingsUpdatePassword from './settingsUpdatePassword';
import settingsUpdateEmail from './settingsUpdateEmail';
import settingsUpdatePgp from './settingsUpdatePgp';
import recoveryAccountReset from './recoveryAccountReset';
import recoveryAccountUpdate from './recoveryAccountUpdate';
import accountInfo from './accountInfo';
import captcha from './captcha';
import paymentBitcoinAddress from './paymentBitcoinAddress';
import accountBalance from './accountBalance';

export default combineReducers({
  form,
  navigation,
  auth,
  login,
  signup,
  pgpConfirm,
  settingsUpdatePassword,
  settingsUpdateEmail,
  settingsUpdatePgp,
  recoveryAccountReset,
  recoveryAccountUpdate,
  accountInfo,
  captcha,
  paymentBitcoinAddress,
  accountBalance,
});
