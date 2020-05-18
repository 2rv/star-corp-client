import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { validate } from '../../validations/settingsUpdateEmail';
import { SETTINGS_UPDATE_EMAIL } from '../../constants/fields';
import { settingsUpdateEmail } from '../../actions/settingsUpdateEmail';
import { FORM_NAMES } from '../../constants';
import { getData, isLoading, isLoaded } from '../../utils/store';

import { UpdateEmailView } from './View';

class SettingsUpdateEmailContainer extends Component {
  componentDidMount() {
    const { accountInfo, initialize, accountInfoLoaded } = this.props;
    if (accountInfoLoaded) {
      initialize({ [SETTINGS_UPDATE_EMAIL.EMAIL]: accountInfo.email });
    }
  }

  componentDidUpdate(prev) {
    const { accountInfo, initialize, accountInfoLoaded } = this.props;
    if (accountInfo.email !== prev.accountInfo.email && accountInfoLoaded) {
      initialize({ [SETTINGS_UPDATE_EMAIL.EMAIL]: accountInfo.email });
    }
  }

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  submitUpdateEmail = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      settingsUpdateEmail({
        email: form[SETTINGS_UPDATE_EMAIL.EMAIL],
      }),
    );
  };

  render() {
    const { handleSubmit, loading, statusError, errorMessage, success, accountInfoLoading } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.submitUpdateEmail(form))}>
        <UpdateEmailView
          disabled={this.isFormDisabled()}
          loading={loading}
          error={statusError}
          errorMessage={errorMessage}
          formLoading={accountInfoLoading}
          success={success}
        />
      </form>
    );
  }
}

const updateEmailForm = reduxForm({
  form: FORM_NAMES.SETTINGS_UPDATE_EMAIL,
  validate,
});

const mapStateToProps = (state) => {
  const {
    settingsUpdateEmail: { errorMessage, error, loading, success },
    accountInfo,
  } = state;
  return {
    statusError: error,
    errorMessage,
    loading,
    success,
    accountInfo: getData(accountInfo.data),
    accountInfoLoading: isLoading(accountInfo.data),
    accountInfoLoaded: isLoaded(accountInfo.data),
  };
};

SettingsUpdateEmailContainer.propTypes = {
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  success: PropTypes.bool,
  accountInfo: PropTypes.object,
  accountInfoLoading: PropTypes.bool,
  accountInfoLoaded: PropTypes.bool,
  initialize: PropTypes.func,
};

export const SettingsUpdateEmail = compose(connect(mapStateToProps), updateEmailForm)(SettingsUpdateEmailContainer);
