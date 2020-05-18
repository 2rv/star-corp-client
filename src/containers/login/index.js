import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { LOGIN } from '../../constants/fields';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { validate } from '../../validations/login';
import { login, loginReset } from '../../actions/login';
import { generateCaptcha } from '../../actions/captcha';

import { LoginView } from './View';

class LoginContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.LOGIN));
  }

  componentDidUpdate() {
    const { dispatch, change, statusReset } = this.props;

    if (statusReset) {
      dispatch(loginReset(false));
      dispatch(generateCaptcha());
      dispatch(change(LOGIN.CAPTCHA, ''));
    }
  }

  login = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      login({
        login: form[LOGIN.LOGIN],
        password: form[LOGIN.PASSWORD],
        captcha: form[LOGIN.CAPTCHA],
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
      <form onSubmit={handleSubmit((form) => this.login(form))}>
        <LoginView loading={loading} errorMessage={errorMessage} error={statusError} disabled={this.isFormDisabled()} />
      </form>
    );
  }
}

const loginForm = reduxForm({
  form: FORM_NAMES.LOGIN,
  validate,
});

const mapStateToProps = ({ login: { errorMessage, error, reset, loading } }) => ({
  statusError: error,
  errorMessage,
  loading,
  statusReset: reset,
});

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusReset: PropTypes.bool,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const Login = compose(connect(mapStateToProps), loginForm)(LoginContainer);
