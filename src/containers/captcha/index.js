import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getData, isLoading } from '../../utils/store';
import { generateCaptcha } from '../../actions/captcha';

import { CaptchaView } from './View';

class CaptchaContainer extends Component {
  componentDidMount() {
    return this.loadCaptcha();
  }

  loadCaptcha = () => {
    const { dispatch } = this.props;

    return dispatch(generateCaptcha());
  };

  render() {
    const { data, isDataLoading, ...props } = this.props;

    return <CaptchaView captcha={data} captchaLoading={isDataLoading} loadCaptcha={this.loadCaptcha} {...props} />;
  }
}

const mapStateToProps = ({ captcha: { data } }) => ({
  data: getData(data),
  isDataLoading: isLoading(data),
});

CaptchaContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
  updateCaptcha: PropTypes.bool,
};

export const Captcha = compose(connect(mapStateToProps))(CaptchaContainer);
