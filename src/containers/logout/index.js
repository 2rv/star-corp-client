import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { headerNavigatePath } from '../../actions/navigation';
import { LogoutView } from './View';
import { ROUTES } from '../../constants/routes';
import { logOut } from '../../actions/login';

class LogoutContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(headerNavigatePath(ROUTES.LOGOUT));
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logOut());
  };

  render() {
    const { confirmType } = this.props;
    return <LogoutView logout={this.handleLogout} confirmType={confirmType} />;
  }
}

LogoutContainer.propTypes = {
  dispatch: PropTypes.func,
  confirmType: PropTypes.bool,
};

export const Logout = compose(connect())(LogoutContainer);
