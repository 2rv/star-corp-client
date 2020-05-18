import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { Loader } from '../../components';
import { SkeletonList } from '../../components/skeletons';
import { ListTitle } from '../../components/titles';

import { AccountInfo } from './AccountInfo';

export const SettingsAccountInfoView = ({ loading, loaded, data }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <ListTitle tid="SETTINGS.ACCOUNT_INFO.TITLE" />
          {loading && <SkeletonList />}
          {loaded && <AccountInfo {...data} />}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

SettingsAccountInfoView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  data: PropTypes.object,
};
