import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAccountInfo } from '../../actions/accountInfo';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { SettingsAccountInfoView } from './View';
import { getData, isLoaded, isLoading } from '../../utils/store';

export const SettingsAccountInfo = () => {
  const { data, isDataLoading, isDataLoaded, pageLoading } = useSelector((state) => ({
    data: getData(state.accountInfo.data),
    isDataLoading: isLoading(state.accountInfo.data),
    isDataLoaded: isLoaded(state.accountInfo.data),
    pageLoading: state.navigation.pageLoading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.SETTINGS));
    dispatch(getAccountInfo());
  }, []);

  const getLoading = () => {
    return (pageLoading && !isDataLoaded) || isDataLoading;
  };

  return <SettingsAccountInfoView data={data} loaded={isDataLoaded} loading={getLoading()} />;
};
