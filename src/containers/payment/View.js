import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { PAYMENT } from '../../constants/fields';
import { TextField } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';
import { spacing } from '../../theme';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const PaymentView = ({ disabled, loading, error, errorMessage, formLoading, success }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="PAYMENT.CREATE_FORM.TITLE" />
          <FieldGrid fourthpart>
            <Field
              name={PAYMENT.PAYMENT_VALUE}
              loading={formLoading}
              component={TextField}
              label={<Text tid="PAYMENT.CREATE_FORM.VALUE" />}
            />
            <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
              <Text tid="PAYMENT.CREATE_FORM.BUTTON" />
            </ButtonSubmit>
          </FieldGrid>
          <Message>
            <Text tid="PAYMENT.CREATE_FORM.INFORMATION" />
          </Message>
          {(error || success) && (
            <ErrorSection>
              {success && <Alert type="success" tid="PAYMENT.CREATE_FORM.ALERT_SUCCESS" variant="outlined" />}
              {error && <Alert type="error" tid={`ERROR.${errorMessage}`} variant="outlined" />}
            </ErrorSection>
          )}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

PaymentView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  formLoading: PropTypes.bool,
};

const ButtonSubmit = styled(ButtonPrimary)`
  && {
    max-width: 300px;
    width: 100%;
  }
`;

const ErrorSection = styled.div`
  margin-top: ${spacing(4)};
`;

const Message = styled.div`
  && {
    max-width: 100%;
    color: #fff;
  }
`;
