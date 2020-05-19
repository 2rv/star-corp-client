import React from 'react';

import Head from '../../_head';

import { PAGE_TYPE } from '../../../constants/meta';
import { AuthLayout } from '../../../components/layouts';
import { RecoveryAccountUpdate } from '../../../containers';

const AccountRecoveryPasswordPage = () => {
  return (
    <AuthLayout align="center">
      <Head id={PAGE_TYPE.RECOVERY_ACCOUNT_UPDATE} />
      <RecoveryAccountUpdate />
    </AuthLayout>
  );
};

export default AccountRecoveryPasswordPage;
