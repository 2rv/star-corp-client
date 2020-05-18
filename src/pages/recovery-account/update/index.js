import React from 'react';

import Head from '../../_head';

import { PAGE_TYPE } from '../../../constants/meta';
import { PageLayout, SectionLayout, ResponsiveLayout, ContentLayout } from '../../../components/layouts';
import { RecoveryAccountUpdate } from '../../../containers';

const AccountRecoveryPasswordPage = () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.RECOVERY_ACCOUNT_UPDATE} />
      <ContentLayout>
        <ResponsiveLayout size="small">
          <SectionLayout indent>
            <RecoveryAccountUpdate />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default AccountRecoveryPasswordPage;
