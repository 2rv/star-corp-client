import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { FormTitle } from '../../components/titles';

export const LogoutView = ({ logout, confirmType = false }) => {
  return (
    <Box variant="outlined">
      <IndentLayout>
        <FormTitle tid={confirmType ? 'LOGOUT.CONFIRM_TITLE' : 'LOGOUT.TITLE'} />
        <ButtonPrimary
          size="large"
          variant="outlined"
          fullWidth={confirmType}
          color={confirmType ? 'primary' : 'default'}
          onClick={logout}
        >
          <Text tid="LOGOUT.BUTTON" />
        </ButtonPrimary>
      </IndentLayout>
    </Box>
  );
};

LogoutView.propTypes = {
  logout: PropTypes.func.isRequired,
  confirmType: PropTypes.bool,
};
