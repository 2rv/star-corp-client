import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { LOGIN } from '../../constants/fields';
import { TextField, TextFieldPassword } from '../../components/fields';
import { Text, Loader, Alert, FormLinks } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { ButtonPrimary } from '../../components/buttons';
import { spacing } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';

import { Captcha } from '../index';

export const LOGIN_LINKS = [
  { tid: 'LOGIN.LINK.SIGNUP', link: ROUTES.SIGNUP },
  { tid: 'LOGIN.LINK.FORGOT_PASSWORD', link: ROUTES.RECOVERY_ACCOUNT_RESET },
];

export const LoginView = ({ disabled, loading, error, errorMessage }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="LOGIN.FORM.TITLE" icon={ExitToAppIcon} />
          <FieldGrid>
            <Field name={LOGIN.LOGIN} component={TextField} label={<Text tid="LOGIN.FORM.LOGIN" />} />
            <Field name={LOGIN.PASSWORD} component={TextFieldPassword} label={<Text tid="LOGIN.FORM.PASSWORD" />} />
            <Field
              name={LOGIN.CAPTCHA}
              updateCaptcha={error}
              component={Captcha}
              label={<Text tid="LOGIN.FORM.CAPTCHA" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="LOGIN.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
        </IndentLayout>

        <FormLinks items={LOGIN_LINKS} />
        {loading && <Loader />}
      </Box>
      {error && (
        <ErrorSection>
          <Alert type="error" tid={`ERROR.${errorMessage}`} />
        </ErrorSection>
      )}
    </React.Fragment>
  );
};

LoginView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)`
  width: 100%;
`;

const ErrorSection = styled.div`
  margin-top: ${spacing(3)};
`;
