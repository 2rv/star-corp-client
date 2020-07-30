import React from 'react';

import Head from '../_head';
import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { ProfileInfo } from '../../containers';

const BalancePage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.PROFILE} />
      <ContentLayout>
        <ResponsiveLayout size="medium">
          <SectionLayout indent>
            <ProfileInfo />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default BalancePage;
