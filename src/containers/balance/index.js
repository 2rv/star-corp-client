import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getBalanceData } from '../../actions/balance';

import { BalanceView } from './View';

class BalanceContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBalanceData());
  }

  render() {
    const { loading, statusError, errorMessage, loaded, data, pageLoading } = this.props;

    return (
      <BalanceView
        loading={(pageLoading || loading) && !loaded}
        error={statusError}
        data={data}
        errorMessage={errorMessage}
        loaded={loaded}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    balance: { errorMessage, error, loading, loaded, data },
    navigation,
  } = state;
  return {
    statusError: error,
    errorMessage,
    loading,
    loaded,
    data,
    pageLoading: navigation.pageLoading,
  };
};

BalanceContainer.propTypes = {
  errorMessage: PropTypes.string,
  dispatch: PropTypes.func,
  data: PropTypes.object,
  statusError: PropTypes.bool,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  pageLoading: PropTypes.bool,
};

export const Balance = compose(connect(mapStateToProps))(BalanceContainer);
