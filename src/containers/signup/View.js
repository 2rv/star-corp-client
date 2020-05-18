import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { SIGNUP } from '../../constants/fields';
import { TextField, TextFieldPassword, Checkbox } from '../../components/fields';
import { Text, Loader, Alert, FormLinks, Link } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { ButtonPrimary } from '../../components/buttons';
import { spacing, colors } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';

import { Captcha } from '../index';

export const SIGNUP_LINKS = [
  { tid: 'SIGNUP.LINK.LOGIN', link: ROUTES.LOGIN },
  { tid: 'SIGNUP.LINK.FORGOT_PASSWORD', link: ROUTES.RECOVERY_ACCOUNT_RESET },
];

export const SignupView = ({ disabled, loading, error, errorMessage }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SIGNUP.FORM.TITLE" icon={AccountCircleOutlinedIcon} />
          <FieldGrid>
            <Field name={SIGNUP.LOGIN} component={TextField} label={<Text tid="SIGNUP.FORM.LOGIN" />} />
            <Field name={SIGNUP.NICKNAME} component={TextField} label={<Text tid="SIGNUP.FORM.NICKNAME" />} />
            <Field name={SIGNUP.PASSWORD} component={TextFieldPassword} label={<Text tid="SIGNUP.FORM.PASSWORD" />} />
            <Field
              name={SIGNUP.PASSWORD_REPEAT}
              component={TextFieldPassword}
              label={<Text tid="SIGNUP.FORM.PASSWORD_REPEAT" />}
            />
            <CheckboxBox variant="outlined">
              <Field
                name={SIGNUP.PRIVACY}
                component={Checkbox}
                label={
                  <React.Fragment>
                    <Text tid="SIGNUP.FORM.PRIVACY" />{' '}
                    <Link href={ROUTES.PRIVACY}>
                      <Text tid="SIGNUP.LINK.PRIVACY" />
                    </Link>
                  </React.Fragment>
                }
              />
            </CheckboxBox>
            <Field name={SIGNUP.CAPTCHA} component={Captcha} label={<Text tid="SIGNUP.FORM.CAPTCHA" />} />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="SIGNUP.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
        </IndentLayout>

        <FormLinks items={SIGNUP_LINKS} />
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

SignupView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const CheckboxBox = styled(Box)`
  && {
    border-color: ${colors.gray};
    color: ${colors.textGray};
  }
`;

const ButtonSubmit = styled(ButtonPrimary)`
  width: 100%;
`;

const ErrorSection = styled.div`
  margin-top: ${spacing(3)};
`;
