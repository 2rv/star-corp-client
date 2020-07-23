import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { REPORT } from '../../constants/fields';
import { TextField, TextAreaField } from '../../components/fields';
import { Text, Loader, Alert } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';
import { spacing } from '../../theme';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const ReportView = ({ disabled, loading, error, errorMessage, formLoading, success }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="REPORT.CREATE_FORM.TITLE" />
          <FieldGrid>
            <FieldGrid double offset={false}>
              <Field name={REPORT.NICKNAME} component={TextField} label={<Text tid="REPORT.CREATE_FORM.NICKNAME" />} />
            </FieldGrid>
            <Field
              name={REPORT.DESCRIPTION}
              loading={formLoading}
              component={TextAreaField}
              label={<Text tid="REPORT.CREATE_FORM.DESCRIPTION" />}
            />
          </FieldGrid>
          <ButtonSubmit size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="REPORT.CREATE_FORM.BUTTON" />
          </ButtonSubmit>
          {(error || success) && (
            <ErrorSection>
              {success && <Alert type="success" tid="REPORT.CREATE_FORM.ALERT_SUCCESS" variant="outlined" />}
              {error && <Alert type="error" tid={`ERROR.${errorMessage}`} variant="outlined" />}
            </ErrorSection>
          )}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

ReportView.propTypes = {
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
