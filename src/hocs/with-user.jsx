import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Preloader from '../components/preloader';

import useUser from '../hooks/use-user';

import { Urls, getNewToken } from '../utils';

import { useGetUserMutation, useRefreshTokenMutation } from '../store';

export default function withUser(Page, shouldBeAuthorized = true) {
  return function WithUser(pageProps) {
    const location = useLocation();
    const token = localStorage.getItem('accessToken');
    let userData = useUser();
    const [getUser, { isUninitialized, isLoading, isError }] = useGetUserMutation();
    const [refreshToken, { isLoading: loading, isError: error }] = useRefreshTokenMutation();

    useEffect(() => {
      const getUserData = async () => {
        if (isUninitialized && !userData && token) {
          try {
            const res = await getUser();

            if (res?.error?.data?.message === 'jwt expired') {
              await getNewToken(refreshToken);
              await getUserData();
              userData = res.data.user;
            } else if (res.data?.user && !isError) {
              userData = res.data.user;
            }
          } catch (e) {
            console.log(e);
          }
        }
      };

      getUserData();
    }, [getUser, isError, isLoading, isUninitialized, userData]);

    if (isLoading || (isUninitialized && !userData && token)) {
      return <Preloader />;
    }

    if (userData || !shouldBeAuthorized) {
      const pagePropsWithUser = { ...pageProps, user: userData };
      pagePropsWithUser.user = userData;

      return <Page {...pagePropsWithUser} />;
    }

    return <Navigate to={Urls.SIGN.IN} state={{ from: location.pathname }} />;
  };
}
