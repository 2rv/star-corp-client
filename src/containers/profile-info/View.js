import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { Loader } from '../../components';
import { SkeletonList } from './SkeletonList';
import { ListTitle } from '../../components/titles';

const LoaderComponent = () => (
  <React.Fragment>
    <Loader />
    <SkeletonList />
  </React.Fragment>
);

const ProfileInfo = dynamic(() => import('./ProfileInfo').then((module) => module.ProfileInfo), {
  loading: LoaderComponent,
});

export const ProfileInfoView = ({ loading, loaded, data }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          <ListTitle offset={2} tid="PROFILE.PROFILE_INFO.TITLE" />
          {loading && <LoaderComponent />}
          {loaded && <ProfileInfo {...data} />}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

ProfileInfoView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  data: PropTypes.object,
};
