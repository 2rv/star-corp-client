import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Loader } from '../../components';
import { spacing, colors } from '../../theme';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const AccountBalanceView = ({ loading }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <TopBar size="small"></TopBar>
        <IndentLayout size="small"></IndentLayout>
      </Box>
    </React.Fragment>
  );
};

AccountBalanceView.propTypes = {
  loading: PropTypes.bool,
};

const TopBar = styled(IndentLayout)`
  border-bottom: 1px solid ${colors.gray};
`;
