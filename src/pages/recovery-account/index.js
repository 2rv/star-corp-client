import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, SectionLayout, ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { RecoveryAccountReset } from '../../containers';

const AccountRecoveryLoginPage = () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.RECOVERY_ACCOUNT_RESET} />
      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout indent>
            <RecoveryAccountReset />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default AccountRecoveryLoginPage;
