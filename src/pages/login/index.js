import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { AuthLayout } from '../../components/layouts';
import { Login } from '../../containers';

export default () => {
  return (
    <AuthLayout align="center">
      <Head id={PAGE_TYPE.LOGIN} />
      <Login />
    </AuthLayout>
  );
};
