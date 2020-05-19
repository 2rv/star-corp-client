import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { validate } from '../../validations/settingsUpdatePassword';
import { SETTINGS_UPDATE_PASSWORD } from '../../constants/fields';
import { settingsUpdatePassword } from '../../actions/settingsUpdatePassword';
import { getData, isLoading } from '../../utils/store';

import { UpdatePasswordView } from './View';

class SettingsUpdatePasswordContainer extends Component {
  isFormDisabled = () => {
    const { valid, pristine, submitting, loading, accountInfoLoading } = this.props;

    return !valid || pristine || submitting || loading || accountInfoLoading;
  };

  submitUpdatePassword = (form) => {
    const { dispatch } = this.props;
    dispatch(
      settingsUpdatePassword({
        currentPassword: form[SETTINGS_UPDATE_PASSWORD.CURRENT_PASSWORD],
        newPassword: form[SETTINGS_UPDATE_PASSWORD.NEW_PASSWORD],
      }),
    );

    dispatch(reset(FORM_NAMES.SETTINGS_UPDATE_PASSWORD));
  };

  render() {
    const { handleSubmit, loading, statusError, errorMessage, success } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.submitUpdatePassword(form))}>
        <UpdatePasswordView
          disabled={this.isFormDisabled()}
          loading={loading}
          error={statusError}
          errorMessage={errorMessage}
          success={success}
        />
      </form>
    );
  }
}

const updatePasswordForm = reduxForm({
  form: FORM_NAMES.SETTINGS_UPDATE_PASSWORD,
  validate,
});

const mapStateToProps = ({ settingsUpdatePassword: { loading, error, errorMessage, success }, accountInfo }) => ({
  loading,
  statusError: error,
  errorMessage,
  success,
  accountInfo: getData(accountInfo.data),
  accountInfoLoading: isLoading(accountInfo.data),
});

SettingsUpdatePasswordContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  accountInfo: PropTypes.object,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  statusError: PropTypes.bool,
  success: PropTypes.bool,
  accountInfoLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export const SettingsUpdatePassword = compose(
  connect(mapStateToProps),
  updatePasswordForm,
)(SettingsUpdatePasswordContainer);
