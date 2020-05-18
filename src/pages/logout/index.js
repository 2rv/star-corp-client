import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, SectionLayout, ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { Logout } from '../../containers';

export default () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.LOGOUT} />
      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout indent>
            <Logout confirmType />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};
