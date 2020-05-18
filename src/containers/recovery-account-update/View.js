import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import { RECOVERY_ACCOUNT_UPDATE } from '../../constants/fields';
import { TextFieldPassword } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { ButtonPrimary } from '../../components/buttons';
import { spacing } from '../../theme';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';

export const RecoveryAccountUpdateView = ({ disabled, loading, error, errorMessage }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="RECOVERY.UPDATE.FORM.TITLE" icon={PermIdentityIcon} />
          <FieldGrid>
            <Field
              name={RECOVERY_ACCOUNT_UPDATE.PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="RECOVERY.UPDATE.FORM.PASSWORD" />}
            />
            <Field
              name={RECOVERY_ACCOUNT_UPDATE.REPEAT_PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="RECOVERY.UPDATE.FORM.REPEAT_PASSWORD" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="RECOVERY.UPDATE.FORM.BUTTON_SUBMIT" />
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

RecoveryAccountUpdateView.propTypes = {
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
