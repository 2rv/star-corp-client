import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getProfileInfoData } from '../../actions/profileInfo';

import { ProfileInfoView } from './View';

class ProfileInfoContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProfileInfoData());
  }

  render() {
    const { loading, statusError, errorMessage, loaded, data, pageLoading } = this.props;

    return (
      <ProfileInfoView
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
    userProfile: { errorMessage, error, loading, success, data },
    navigation,
  } = state;
  return {
    statusError: error,
    errorMessage,
    loading,
    loaded: success,
    data,
    pageLoading: navigation.pageLoading,
  };
};

ProfileInfoContainer.propTypes = {
  errorMessage: PropTypes.string,
  dispatch: PropTypes.func,
  data: PropTypes.object,
  statusError: PropTypes.bool,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  pageLoading: PropTypes.bool,
};

export const ProfileInfo = compose(connect(mapStateToProps))(ProfileInfoContainer);
