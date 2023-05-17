import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Preloader from '../components/preloader';

import useUser from '../hooks/use-user';

import { Urls } from '../utils';

import { useGetUserMutation } from '../store';

export default function withUser(Page, shouldBeAuthorized = true) {
  return function WithUser(pageProps) {
    let userData = useUser();
    const [getUser, {
      isUninitialized,
      isLoading,
      isError,
    }] = useGetUserMutation();

    useEffect(() => {
      if (isUninitialized && !userData) {
        getUser().then((res) => {
          if (res.data?.user && !isError) {
            userData = res.data.user;
          }
        });
      }
    }, [getUser, isError, isLoading, isUninitialized, userData]);

    if (isLoading || (isUninitialized && !userData)) {
      return <Preloader />;
    }

    if (userData || !shouldBeAuthorized) {
      const pagePropsWithUser = { ...pageProps, user: userData };
      pagePropsWithUser.user = userData;
      return <Page {...pagePropsWithUser} />;
    }

    return <Navigate to={Urls.SIGN.IN} />;
  };
}
