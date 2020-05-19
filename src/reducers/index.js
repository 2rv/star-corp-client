import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navigation from './navigation';
import auth from './auth';
import login from './login';
import signup from './signup';
import settingsUpdatePassword from './settingsUpdatePassword';
import settingsUpdateEmail from './settingsUpdateEmail';
import recoveryAccountReset from './recoveryAccountReset';
import recoveryAccountUpdate from './recoveryAccountUpdate';
import accountInfo from './accountInfo';
import accountBalance from './accountBalance';

export default combineReducers({
  form,
  navigation,
  auth,
  login,
  signup,
  settingsUpdatePassword,
  settingsUpdateEmail,
  recoveryAccountReset,
  recoveryAccountUpdate,
  accountInfo,
  accountBalance,
});