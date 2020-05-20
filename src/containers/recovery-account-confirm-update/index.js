import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { RECOVERY_ACCOUNT_CONFIRM_UPDATE } from '../../constants/fields';
import { FORM_NAMES } from '../../constants';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { validate } from '../../validations/recoveryAccountConfirm';
import { sendRecoveryAccountConfirm } from '../../actions/recoveryAccountConfirmUpdate';

import { RecoveryAccountConfirmUpdateView } from './View';

class RecoveryAccountConfirmUpdateContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.RECOVERY_ACCOUNT_CONFIRM));
  }

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  reset = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      sendRecoveryAccountConfirm({
        code: form[RECOVERY_ACCOUNT_CONFIRM_UPDATE.CODE],
        password: form[RECOVERY_ACCOUNT_CONFIRM_UPDATE.PASSWORD],
      }),
    );
  };

  render() {
    const { loading, handleSubmit, errorMessage, statusError, email } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.reset(form))}>
        <RecoveryAccountConfirmUpdateView
          loading={loading}
          errorMessage={errorMessage}
          error={statusError}
          email={email}
          disabled={this.isFormDisabled()}
        />
      </form>
    );
  }
}

const ReduxForm = reduxForm({
  form: FORM_NAMES.RECOVERY_ACCOUNT_CONFIRM_UPDATE,
  validate,
});

const mapStateToProps = ({
  recoveryAccountConfirmUpdate: {
    errorMessage,
    error,
    loading,
    data: { email },
  },
}) => ({
  statusError: error,
  errorMessage,
  loading,
  email,
});

RecoveryAccountConfirmUpdateContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  email: PropTypes.string,
};

export const RecoveryAccountConfirmUpdate = compose(
  connect(mapStateToProps),
  ReduxForm,
)(RecoveryAccountConfirmUpdateContainer);
