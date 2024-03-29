import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import { RECOVERY_ACCOUNT_RESET } from '../../constants/fields';
import { TextField } from '../../components/fields';
import { Text, Loader, Alert, FormLinks } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { ButtonPrimary } from '../../components/buttons';
import { FieldGrid } from '../../components/grids';
import { spacing } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { FormTitle } from '../../components/titles';

export const ACCOUNT_RECOVERY_LOGIN_LINKS = [
  { tid: 'RECOVERY.RESET.LINK.LOGIN', link: ROUTES.LOGIN },
  { tid: 'RECOVERY.RESET.LINK.SIGNUP', link: ROUTES.SIGNUP },
];

export const RecoveryAccountResetView = ({ disabled, loading, error, errorMessage }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="RECOVERY.RESET.FORM.TITLE" />
          <FieldGrid>
            <Field
              name={RECOVERY_ACCOUNT_RESET.EMAIL}
              component={TextField}
              label={<Text tid="RECOVERY.RESET.FORM.EMAIL" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="RECOVERY.RESET.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
          <FormLinks items={ACCOUNT_RECOVERY_LOGIN_LINKS} />
          {error && (
            <ErrorSection>
              <Alert type="error" tid={`ERROR.${errorMessage}`} variant="outlined" />
            </ErrorSection>
          )}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

RecoveryAccountResetView.propTypes = {
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
