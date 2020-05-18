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
              name={SETTINGS_UPDATE_PASSWORD.PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_PASSWORD.FORM.PASSWORD" />}
            />
            <Field
              name={SETTINGS_UPDATE_PASSWORD.REPEAT_PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_PASSWORD.FORM.REPEAT_PASSWORD" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="SETTINGS.UPDATE_PASSWORD.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
        </IndentLayout>
      </Box>
      {error || success && (
        <ErrorSection>
          {success && <Alert type="success" tid="SETTINGS.UPDATE_PASSWORD.FORM.ALERT_SUCCESS" />}
          {error && <Alert type="error" tid={`ERROR.${errorMessage}`} />}
        </ErrorSection>
      )}
      
    </React.Fragment>
  );
};

const ErrorSection = styled.div`
  margin-top: ${spacing(3)};
`;

UpdatePasswordView.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)``;
const FieldSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${spacing(4)} ${spacing(6)};
  margin-bottom: ${spacing(4)};
`;
