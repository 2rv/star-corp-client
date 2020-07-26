import React from 'react';
import PropTypes from 'prop-types';

import { Loader, Alert } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { SkeletonList } from './SkeletonList';
import { BalanceAmount } from './BalanceAmount';

export const BalanceView = ({ loading, error, errorMessage, data, loaded }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          {loading && <SkeletonList />}
          {loaded && <BalanceAmount balance={data.balance} />}
          {error && <Alert type="error" tid={`ERROR.${errorMessage}`} variant="outlined" />}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

BalanceView.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  data: PropTypes.object,
  loaded: PropTypes.bool,
};
