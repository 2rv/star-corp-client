import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import { SIGNUP } from '../../constants/fields';
import { TextField, TextFieldPassword } from '../../components/fields';
import { Text, Loader, Alert, FormLinks } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { ButtonPrimary } from '../../components/buttons';
import { spacing } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';

export const SIGNUP_LINKS = [
  { tid: 'SIGNUP.LINK.LOGIN', link: ROUTES.LOGIN },
  { tid: 'SIGNUP.LINK.FORGOT_PASSWORD', link: ROUTES.RECOVERY_ACCOUNT_RESET },
];

export const SignupView = ({ disabled, loading, error, errorMessage }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SIGNUP.FORM.TITLE" />
          <FieldGrid>
            <Field name={SIGNUP.LOGIN} component={TextField} label={<Text tid="SIGNUP.FORM.LOGIN" />} />
            <Field name={SIGNUP.EMAIL} component={TextField} label={<Text tid="SIGNUP.FORM.EMAIL" />} />
            <Field name={SIGNUP.PASSWORD} component={TextFieldPassword} label={<Text tid="SIGNUP.FORM.PASSWORD" />} />
            <Field
              name={SIGNUP.PASSWORD_REPEAT}
              component={TextFieldPassword}
              label={<Text tid="SIGNUP.FORM.PASSWORD_REPEAT" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="contained" color="primary" disabled={disabled} type="submit">
            <Text tid="SIGNUP.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
          <FormLinks items={SIGNUP_LINKS} />
          {error && (
            <ErrorSection>
              <Alert type="error" tid={`ERROR.${errorMessage}`} />
            </ErrorSection>
          )}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

SignupView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)`
  width: 100%;
`;

const ErrorSection = styled.div`
  margin-top: ${spacing(4)};
`;
