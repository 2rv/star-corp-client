import React from 'react';

import Head from '../_head';
import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { AccountBalance, PaymentBitcoinAddress } from '../../containers';

const PaymentPage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.PAYMENT} />
      <ContentLayout>
        <ResponsiveLayout size="medium">
          <SectionLayout indent>
            <AccountBalance />
            <PaymentBitcoinAddress />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default PaymentPage;
