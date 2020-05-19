import React from 'react';

import Head from '../_head';
import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { SettingsAccountInfo, SettingsUpdateEmail, SettingsUpdatePassword, Logout } from '../../containers';

const SettingsPage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.SETTINGS} />
      <ContentLayout>
        <ResponsiveLayout size="medium">
          <SectionLayout indent>
            <SettingsAccountInfo />
            <SettingsUpdatePassword />
            <SettingsUpdateEmail />
            <Logout />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default SettingsPage;
