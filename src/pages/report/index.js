import React from 'react';

import Head from '../_head';
import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { Report } from '../../containers';

const ReportPage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.REPORT} />
      <ContentLayout>
        <ResponsiveLayout size="medium">
          <SectionLayout indent>
            <Report />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default ReportPage;
