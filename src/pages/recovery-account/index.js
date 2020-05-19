import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { AuthLayout } from '../../components/layouts';
import { RecoveryAccountReset } from '../../containers';

const AccountRecoveryLoginPage = () => {
  return (
    <AuthLayout align="center">
      <Head id={PAGE_TYPE.RECOVERY_ACCOUNT_RESET} />
      <RecoveryAccountReset />
    </AuthLayout>
  );
};

export default AccountRecoveryLoginPage;
