import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { validate } from '../../validations/payment';
import { sendPaymentData } from '../../actions/payment';
import { FORM_NAMES } from '../../constants';
import { PAYMENT } from '../../constants/fields';
import { getData, isLoading, isLoaded } from '../../utils/store';

import { PaymentView } from './View';

class PaymentContainer extends Component {
  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  submitPayment = (form) => {
    const { dispatch } = this.props;

    dispatch(
      sendPaymentData({
        paymentValue: form[PAYMENT.PAYMENT_VALUE],
      }),
    );
  };

  render() {
    const { handleSubmit, loading, statusError, errorMessage, success, accountInfoLoading } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitPayment)}>
        <PaymentView
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

const paymentForm = reduxForm({
  form: FORM_NAMES.PAYMENT,
  validate,
});

const mapStateToProps = (state) => {
  const {
    payment: { errorMessage, error, loading, success },
  } = state;
  return {
    statusError: error,
    errorMessage,
    loading,
    success,
  };
};

PaymentContainer.propTypes = {
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  success: PropTypes.bool,
};

export const Payment = compose(connect(mapStateToProps), paymentForm)(PaymentContainer);
