import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { PGP_CONFIRM } from '../../constants/fields';
import { FORM_NAMES } from '../../constants';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { validate } from '../../validations/recoveryAccountReset';
import { sendPgpRecoveryAccountConfirm, sendSettingsUpdatePasswordConfirm } from '../../actions/pgpConfirm';

import { PgpConfirmView } from './View';

class PgpConfirmContainer extends Component {
  componentDidMount() {
    const { dispatch, routePath } = this.props;
    dispatch(headerNavigatePath(routePath));
  }

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  send = (form) => {
    const { dispatch, confirmAction } = this.props;

    return dispatch(
      confirmAction({
        key: form[PGP_CONFIRM.DECODED_PGP_KEY],
      }),
    );
  };

  render() {
    const { loading, handleSubmit, errorMessage, statusError, encryptedKey } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.send(form))}>
        <PgpConfirmView
          loading={loading}
          errorMessage={errorMessage}
          error={statusError}
          disabled={this.isFormDisabled()}
          encryptedKey={encryptedKey}
        />
      </form>
    );
  }
}

const ReduxForm = reduxForm({
  form: FORM_NAMES.PGP_CONFIRM,
  validate,
});

const mapStateToProps = ({
  pgpConfirm: {
    errorMessage,
    error,
    loading,
    data: { encryptedKey },
  },
}) => ({
  statusError: error,
  errorMessage,
  loading,
  encryptedKey,
});

PgpConfirmContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  routePath: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  encryptedKey: PropTypes.string,
};

export const PgpConfirm = compose(connect(mapStateToProps), ReduxForm)(PgpConfirmContainer);

export const RecoveryAccountPgpConfirm = () => (
  <PgpConfirm routePath={ROUTES.RECOVERY_ACCOUNT_CONFIRM} confirmAction={sendPgpRecoveryAccountConfirm} />
);
export const SettingsUpdatePasswordPgpConfirm = () => (
  <PgpConfirm routePath={ROUTES.SETTINGS_CONFIRM} confirmAction={sendSettingsUpdatePasswordConfirm} />
);
