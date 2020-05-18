import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { SIGNUP } from '../../constants/fields';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { validate } from '../../validations/signup';
import { signup, signupReset } from '../../actions/signup';
import { generateCaptcha } from '../../actions/captcha';

import { SignupView } from './View';

class SingupContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.SIGNUP));
  }

  componentDidUpdate() {
    const { dispatch, change, statusReset } = this.props;

    if (statusReset) {
      dispatch(signupReset(false));
      dispatch(generateCaptcha());
      dispatch(change(SIGNUP.CAPTCHA, ''));
    }
  }

  signup = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      signup({
        login: form[SIGNUP.LOGIN],
        nickname: form[SIGNUP.NICKNAME],
        password: form[SIGNUP.PASSWORD],
        captcha: form[SIGNUP.CAPTCHA],
      }),
    );
  };

  isFormDisabled = () => {
    const { valid, pristine, submitting, loading } = this.props;

    return !valid || pristine || submitting || loading;
  };

  render() {
    const { loading, handleSubmit, errorMessage, statusError } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.signup(form))}>
        <SignupView
          loading={loading}
          errorMessage={errorMessage}
          error={statusError}
          disabled={this.isFormDisabled()}
        />
      </form>
    );
  }
}

const signupForm = reduxForm({
  form: FORM_NAMES.SINGUP,
  validate,
});

const mapStateToProps = ({ signup: { errorMessage, error, loading, reset } }) => ({
  statusError: error,
  errorMessage,
  loading,
  statusReset: reset,
});

SingupContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  statusReset: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const Signup = compose(connect(mapStateToProps), signupForm)(SingupContainer);
