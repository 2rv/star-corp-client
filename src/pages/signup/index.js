import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { Signup } from '../../containers';

export default () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.SIGNUP} />
      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout indent>
            <Signup />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};
