import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout } from '../../components/layouts';
import { Error } from '../../containers';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';

const ErrorAccessDenied = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.ACCESS_DENIED));
  }, []);

  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.ACCESS_DENIED} />
      <Error status={401} />
    </PageLayout>
  );
};

export default ErrorAccessDenied;
