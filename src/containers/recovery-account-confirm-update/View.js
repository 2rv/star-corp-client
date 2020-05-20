import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import { RECOVERY_ACCOUNT_CONFIRM_UPDATE } from '../../constants/fields';
import { TextField, TextFieldPassword } from '../../components/fields';
import { Text, Loader, Alert, FormLinks, Link } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { ButtonPrimary } from '../../components/buttons';
import { FieldGrid } from '../../components/grids';
import { spacing, colors } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { FormTitle } from '../../components/titles';

export const ACCOUNT_RECOVERY_CONFIRM_LINKS = [
  { tid: 'RECOVERY.RESET.LINK.LOGIN', link: ROUTES.LOGIN },
  { tid: 'RECOVERY.CONFIRM.FORM.INCORRECT_EMAIL', link: ROUTES.RECOVERY_ACCOUNT_RESET },
];

export const RecoveryAccountConfirmUpdateView = ({ email, disabled, loading, error, errorMessage }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="RECOVERY.CONFIRM.FORM.TITLE" offset={3} />
          <HelperBlock>
            <HelperText>
              <Text tid="RECOVERY.CONFIRM.FORM.HELPER_TEXT" /> {email}
            </HelperText>
          </HelperBlock>
          <FieldGrid>
            <Field
              name={RECOVERY_ACCOUNT_CONFIRM_UPDATE.CODE}
              component={TextField}
              label={<Text tid="RECOVERY.CONFIRM.FORM.CODE" />}
            />
            <Field
              name={RECOVERY_ACCOUNT_CONFIRM_UPDATE.PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="RECOVERY.CONFIRM.FORM.PASSWORD" />}
            />
            <Field
              name={RECOVERY_ACCOUNT_CONFIRM_UPDATE.REPEAT_PASSWORD}
              component={TextFieldPassword}
              label={<Text tid="RECOVERY.CONFIRM.FORM.REPEAT_PASSWORD" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="RECOVERY.CONFIRM.FORM.BUTTON_SUBMIT" />
          </ButtonSubmit>
          <FormLinks items={ACCOUNT_RECOVERY_CONFIRM_LINKS} />
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

RecoveryAccountConfirmUpdateView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  email: PropTypes.string,
};

const ButtonSubmit = styled(ButtonPrimary)`
  width: 100%;
`;

const ErrorSection = styled.div`
  margin-top: ${spacing(4)};
`;
const HelperBlock = styled.div`
  margin-bottom: ${spacing(6)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const HelperText = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  margin-bottom: ${spacing(1.5)};
`;
