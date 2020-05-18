import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, SectionLayout, ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { Login } from '../../containers';

export default () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.LOGIN} />

      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout indent>
            <Login />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};
