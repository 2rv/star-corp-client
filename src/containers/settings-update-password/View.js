import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { SETTINGS_UPDATE_PASSWORD } from '../../constants/fields';
import { TextFieldPassword } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { spacing } from '../../theme';
import { FieldGrid } from '../../components/grids';
import { FormTitle } from '../../components/titles';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const UpdatePasswordView = ({ disabled, loading, error, errorMessage, success }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SETTINGS.UPDATE_PASSWORD.FORM.TITLE" />
          <FieldGrid double>
            <Field
              name={SETTINGS_UPDATE_PASSWORD.CURRENT_PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_PASSWORD.FORM.CURRENT_PASSWORD" />}
            />
            <Field
              name={SETTINGS_UPDATE_PASSWORD.NEW_PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_PASSWORD.FORM.NEW_PASSWORD" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="SETTINGS.UPDATE_PASSWORD.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
          {(error || success) && (
            <ErrorSection>
              {success && <Alert type="success" tid="SETTINGS.UPDATE_PASSWORD.FORM.ALERT_SUCCESS" variant="outlined" />}
              {error && <Alert type="error" tid={`ERROR.${errorMessage}`} variant="outlined" />}
            </ErrorSection>
          )}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

const ErrorSection = styled.div`
  margin-top: ${spacing(4)};
`;

UpdatePasswordView.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)``;
