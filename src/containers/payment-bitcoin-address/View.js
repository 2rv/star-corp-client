import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Loader } from '../../components';
import { spacing, colors } from '../../theme';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const PaymentBitcoinAddressView = ({ loading }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout></IndentLayout>
      </Box>
    </React.Fragment>
  );
};

PaymentBitcoinAddressView.propTypes = {
  loading: PropTypes.bool,
};
