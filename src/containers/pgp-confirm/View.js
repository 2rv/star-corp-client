import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import { VpnKey } from '@material-ui/icons';
import { PGP_CONFIRM } from '../../constants/fields';
import { TextField, CopyField } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { FieldGrid } from '../../components/grids';
import { ButtonPrimary } from '../../components/buttons';
import { colors, spacing } from '../../theme';
import { FormTitle } from '../../components/titles';

export const PgpConfirmView = ({ disabled, loading, error, errorMessage, encryptedKey }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="CONFIRM.PGP.FORM.TITLE" icon={VpnKey} offset={2} />
          <FieldGrid>
            <HelperText>
              <Text tid="CONFIRM.PGP.FORM.HELPER_TEXT" />
            </HelperText>
            <CopyField
              isTextarea
              disabled
              value={encryptedKey}
              name={PGP_CONFIRM.PGP_KEY}
              alertTid="CONFIRM.PGP.FORM.PGP_KEY_COPY"
              label={<Text tid="CONFIRM.PGP.FORM.PGP_KEY" />}
            />
            <Field
              name={PGP_CONFIRM.DECODED_PGP_KEY}
              component={TextField}
              label={<Text tid="CONFIRM.PGP.FORM.DECODED_PGP_KEY" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="CONFIRM.PGP.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
        </IndentLayout>
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

PgpConfirmView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  encryptedKey: PropTypes.string,
};

const HelperText = styled.p`
  color: ${colors.textPrimary};
  font-size: 14px;
`;

const ButtonSubmit = styled(ButtonPrimary)`
  width: 100%;
`;

const ErrorSection = styled.div`
  margin-top: ${spacing(3)};
`;
