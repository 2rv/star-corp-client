import React from 'react';

import Head from '../../_head';

import { PAGE_TYPE } from '../../../constants/meta';
import { AuthLayout } from '../../../components/layouts';
import { RecoveryAccountConfirm } from '../../../containers';

const AccountRecoveryLoginPage = () => {
  return (
    <AuthLayout align="center">
      <Head id={PAGE_TYPE.RECOVERY_ACCOUNT_CONFIRM} />
      <RecoveryAccountConfirm />
    </AuthLayout>
  );
};

export default AccountRecoveryLoginPage;
