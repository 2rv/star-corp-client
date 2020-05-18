import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { SETTINGS_UPDATE_PGP } from '../../constants/fields';
import { TextAreaField } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { spacing, colors } from '../../theme';
import { FieldGrid } from '../../components/grids';
import { FormTitle } from '../../components/titles';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const SettingsUpdatePgpView = ({
  disabled,
  disabledEdit,
  loading,
  error,
  errorMessage,
  formLoading,
  success,
}) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SETTINGS.UPDATE_PGP.FORM.TITLE" offset={2} />
          <HelperText>
            <Text tid="SETTINGS.UPDATE_PGP.FORM.HELPER_TEXT" />
          </HelperText>
          <FieldGrid>
            <Field
              loading={formLoading}
              disabled={disabledEdit}
              name={SETTINGS_UPDATE_PGP.PGP}
              component={TextAreaField}
              label={<Text tid="SETTINGS.UPDATE_PGP.FORM.PGP" />}
            />
          </FieldGrid>
          {!disabledEdit && (
            <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
              <Text tid="SETTINGS.UPDATE_PGP.FORM.BUTTON_SUBMIT" />
            </ButtonSubmit>
          )}
          {disabledEdit && (
            <HelperText>
              <Text tid="SETTINGS.UPDATE_PGP.FORM.HELPER_TEXT_DISABLED" />
            </HelperText>
          )}
        </IndentLayout>
      </Box>
      {error ||
        (success && (
          <ErrorSection>
            {success && <Alert type="success" tid="SETTINGS.UPDATE_PGP.FORM.ALERT_SUCCESS" />}
            {error && <Alert type="error" tid={`ERROR.${errorMessage}`} />}
          </ErrorSection>
        ))}
    </React.Fragment>
  );
};

const ErrorSection = styled.div`
  margin-top: ${spacing(3)};
`;

SettingsUpdatePgpView.propTypes = {
  disabled: PropTypes.bool,
  disabledEdit: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
  formLoading: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)``;
const HelperText = styled.p`
  color: ${colors.textPrimary};
  font-size: 14px;
  margin-bottom: ${spacing(4)};
`;
