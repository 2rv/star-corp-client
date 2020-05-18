import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { validate } from '../../validations/settingsUpdatePgp';
import { SETTINGS_UPDATE_PGP } from '../../constants/fields';
import { settingsUpdatePgp } from '../../actions/settingsUpdatePgp';
import { getData, isLoading, isLoaded } from '../../utils/store';

import { SettingsUpdatePgpView } from './View';

class SettingsUpdatePgpContainer extends Component {
  componentDidMount() {
    const { accountInfo, initialize, accountInfoLoaded } = this.props;
    if (accountInfoLoaded) {
      initialize({ [SETTINGS_UPDATE_PGP.PGP]: accountInfo.pgp });
    }
  }

  componentDidUpdate(prev) {
    const { accountInfo, initialize, accountInfoLoaded } = this.props;
    if (accountInfo.pgp !== prev.accountInfo.pgp && accountInfoLoaded) {
      initialize({ [SETTINGS_UPDATE_PGP.PGP]: accountInfo.pgp });
    }
  }

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  submitUpdatePGP = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      settingsUpdatePgp({
        pgp: form[SETTINGS_UPDATE_PGP.PGP],
      }),
    );
  };

  render() {
    const { handleSubmit, loading, accountInfo, statusError, errorMessage, success, accountInfoLoading } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.submitUpdatePGP(form))}>
        <SettingsUpdatePgpView
          disabled={this.isFormDisabled()}
          disabledEdit={accountInfo.pgp !== null}
          loading={loading}
          error={statusError}
          formLoading={accountInfoLoading}
          errorMessage={errorMessage}
          success={success}
        />
      </form>
    );
  }
}

const updatePGPForm = reduxForm({
  form: FORM_NAMES.SETTINGS_UPDATE_PGP,
  validate,
});

const mapStateToProps = (state) => {
  const {
    settingsUpdatePgp: { loading, error, errorMessage, success },
    accountInfo,
  } = state;

  return {
    loading,
    statusError: error,
    errorMessage,
    success,
    accountInfo: getData(accountInfo.data),
    accountInfoLoading: isLoading(accountInfo.data),
    accountInfoLoaded: isLoaded(accountInfo.data),
  };
};

SettingsUpdatePgpContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  statusError: PropTypes.bool,
  success: PropTypes.bool,
  errorMessage: PropTypes.string,
  accountInfo: PropTypes.object,
  accountInfoLoading: PropTypes.bool,
  accountInfoLoaded: PropTypes.bool,
  initialize: PropTypes.func,
};

export const SettingsUpdatePgp = compose(connect(mapStateToProps), updatePGPForm)(SettingsUpdatePgpContainer);
