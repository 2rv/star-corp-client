import React from 'react';

import Head from '../../_head';

import { PAGE_TYPE } from '../../../constants/meta';
import { PageLayout, SectionLayout, ResponsiveLayout, ContentLayout } from '../../../components/layouts';

const SettingsConfirm = () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.SETTINGS_CONFIRM} />
      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout>
            Confirm
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default SettingsConfirm;
