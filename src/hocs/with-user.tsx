/* eslint-disable max-len */
import React, { useEffect, type ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Preloader from '../components/preloader';

import useUser from '../hooks/use-user';
import { useToken } from '../hooks/use-token';

import { Urls } from '../utils';

import { useGetUserMutation } from '../store/api/auth-api/endpoints';

type TypeResponse = {
  data: {
    user: TypeUser;
  },
};

type TypeResponseError = {
  error: {
    data: {
      message: string;
    }
  },
};

export default function withUser<P extends Record<string, unknown>>(
  Page: ComponentType<P>,
  shouldBeAuthorized = true,
) {
  return function WithUser(pageProps: P & { user?: TypeUser }) {
    const location = useLocation();
    const token = localStorage.getItem('accessToken');
    let userData = useUser();
    const getNewToken = useToken();

    const [getUser, { isUninitialized, isLoading, isError }] = useGetUserMutation();

    useEffect(() => {
      const getUserData = async () => {
        if (isUninitialized && !userData && token) {
          try {
            const res = await getUser();

            if ((res as TypeResponseError)?.error?.data?.message === 'jwt expired') {
              await getNewToken();
              await getUserData();
              userData = (res as TypeResponse).data.user;
            } else if ((res as TypeResponse).data?.user && !isError) {
              userData = (res as TypeResponse).data.user;
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
