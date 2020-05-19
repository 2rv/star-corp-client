import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { SETTINGS_UPDATE_EMAIL } from '../../constants/fields';
import { TextField, TextFieldPassword } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';
import { spacing } from '../../theme';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const UpdateEmailView = ({ disabled, loading, error, errorMessage, formLoading, success }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SETTINGS.UPDATE_EMAIL.FORM.TITLE" />
          <FieldGrid double>
            <Field
              name={SETTINGS_UPDATE_EMAIL.PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_EMAIL.FORM.PASSWORD" />}
            />
            <Field
              loading={formLoading}
              name={SETTINGS_UPDATE_EMAIL.EMAIL}
              component={TextField}
              label={<Text tid="SETTINGS.UPDATE_EMAIL.FORM.EMAIL" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="SETTINGS.UPDATE_EMAIL.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
          {(error || success) && (
            <ErrorSection>
              {success && <Alert type="success" tid="SETTINGS.UPDATE_EMAIL.FORM.ALERT_SUCCESS" variant="outlined" />}
              {error && <Alert type="error" tid={`ERROR.${errorMessage}`} variant="outlined" />}
            </ErrorSection>
          )}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

UpdateEmailView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  formLoading: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)``;

const ErrorSection = styled.div`
  margin-top: ${spacing(4)};
`;
