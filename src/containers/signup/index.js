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
import { signup } from '../../actions/signup';

import { SignupView } from './View';

class SingupContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.SIGNUP));
  }

  signup = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      signup({
        login: form[SIGNUP.LOGIN],
        email: form[SIGNUP.EMAIL],
        password: form[SIGNUP.PASSWORD],
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

const mapStateToProps = ({ signup: { errorMessage, error, loading } }) => ({
  statusError: error,
  errorMessage,
  loading,
});

SingupContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const Signup = compose(connect(mapStateToProps), signupForm)(SingupContainer);
