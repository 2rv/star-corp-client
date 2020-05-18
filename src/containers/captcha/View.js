import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReplayIcon from '@material-ui/icons/Replay';

import { Progress } from '../../components';
import { Skeleton } from '../../components/skeletons';
import { TextField } from '../../components/fields';
import { sizes, spacing } from '../../theme';

export const CaptchaView = ({ captcha, captchaLoading, loadCaptcha, ...props }) => {
  return (
    <Container double>
      <TextField {...props} />
      <Captcha>
        <CaptchaSkeleton variant="rect" height="100%" width="100%" />
        {captchaLoading ? <Progress size={spacing(5)} /> : <CaptchaImage src={captcha.image} />}
        <Wrapper onClick={loadCaptcha}>
          <ReplayIcon style={{ color: '#fff' }} />
        </Wrapper>
      </Captcha>
    </Container>
  );
};

CaptchaView.propTypes = {
  loadCaptcha: PropTypes.func.isRequired,
  captcha: PropTypes.object.isRequired,
  captchaLoading: PropTypes.bool.isRequired,
};

const CaptchaSkeleton = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4;
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: ${spacing(2)};
  align-items: center;
  cursor: pointer;
  transition: opacity ${sizes.transition.default};
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

const CaptchaImage = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Captcha = styled.div`
  width: 100%;
  min-width: 100px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${spacing(1)};
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-gap: ${spacing(4)};
  grid-template-columns: 1fr 1fr;
`;
