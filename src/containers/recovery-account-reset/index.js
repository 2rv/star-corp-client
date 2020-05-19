import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { RECOVERY_ACCOUNT_RESET } from '../../constants/fields';
import { FORM_NAMES } from '../../constants';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { validate } from '../../validations/recoveryAccountReset';
import { sendRecoveryAccountReset } from '../../actions/recoveryAccountReset';

import { RecoveryAccountResetView } from './View';

class RecoveryAccountResetContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.RECOVERY_ACCOUNT_RESET));
  }

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  reset = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      sendRecoveryAccountReset({
        email: form[RECOVERY_ACCOUNT_RESET.EMAIL],
      }),
    );
  };

  render() {
    const { loading, handleSubmit, errorMessage, statusError } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.reset(form))}>
        <RecoveryAccountResetView
          loading={loading}
          errorMessage={errorMessage}
          error={statusError}
          disabled={this.isFormDisabled()}
        />
      </form>
    );
  }
}

const ReduxForm = reduxForm({
  form: FORM_NAMES.RECOVERY_ACCOUNT_RESET,
  validate,
});

const mapStateToProps = ({ recoveryAccountReset: { errorMessage, error, loading } }) => ({
  statusError: error,
  errorMessage,
  loading,
});

RecoveryAccountResetContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const RecoveryAccountReset = compose(connect(mapStateToProps), ReduxForm)(RecoveryAccountResetContainer);
