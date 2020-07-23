import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { validate } from '../../validations/report';
import { sendReportData } from '../../actions/report';
import { FORM_NAMES } from '../../constants';
import { REPORT } from '../../constants/fields';
import { getData, isLoading, isLoaded } from '../../utils/store';

import { ReportView } from './View';

class ReportContainer extends Component {
  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  submitReport = (form) => {
    const { dispatch } = this.props;

    dispatch(
      sendReportData({
        nickname: form[REPORT.NICKNAME],
        description: form[REPORT.DESCRIPTION],
      }),
    );
  };

  render() {
    const { handleSubmit, loading, statusError, errorMessage, success, accountInfoLoading } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitReport)}>
        <ReportView
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

const reportForm = reduxForm({
  form: FORM_NAMES.REPORT,
  validate,
});

const mapStateToProps = (state) => {
  const {
    report: { errorMessage, error, loading, success },
  } = state;
  return {
    statusError: error,
    errorMessage,
    loading,
    success,
  };
};

ReportContainer.propTypes = {
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  success: PropTypes.bool,
  accountInfoLoading: PropTypes.bool,
};

export const Report = compose(connect(mapStateToProps), reportForm)(ReportContainer);
