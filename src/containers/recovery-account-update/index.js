import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { FORM_NAMES } from '../../constants';
import { validate } from '../../validations/recoveryAccountUpdate';
import { RECOVERY_ACCOUNT_UPDATE } from '../../constants/fields';
import { sendRecoveryAccountUpdate } from '../../actions/recoveryAccountUpdate';

import { RecoveryAccountUpdateView } from './View';

class RecoveryAccountUpdateContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.RECOVERY_ACCOUNT_UPDATE));
  }

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  send = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      sendRecoveryAccountUpdate({
        password: form[RECOVERY_ACCOUNT_UPDATE.PASSWORD],
      }),
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.send(form))}>
        <RecoveryAccountUpdateView disabled={this.isFormDisabled()} />
      </form>
    );
  }
}

const ReduxForm = reduxForm({
  form: FORM_NAMES.RECOVERY_ACCOUNT_UPDATE,
  validate,
});

const mapStateToProps = ({ recoveryAccountUpdate: { errorMessage, error, loading } }) => ({
  statusError: error,
  errorMessage,
  loading,
});

RecoveryAccountUpdateContainer.propTypes = {
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const RecoveryAccountUpdate = compose(connect(mapStateToProps), ReduxForm)(RecoveryAccountUpdateContainer);
