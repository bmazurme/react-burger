import { useRefreshTokenMutation } from '../store';

type ResponseToken = {
  data: {
    accessToken: string;
    refreshToken: string;
  }
};

const useToken = () => {
  const [getToken] = useRefreshTokenMutation();

  const getNewToken = async () => {
    const token = localStorage.getItem('refreshToken');

    try {
      if (token) {
        const res = await getToken({ token });
        const { data } = res as ResponseToken;
        const { accessToken, refreshToken } = data;

        if (accessToken && refreshToken) {
          localStorage.setItem('accessToken', accessToken.split(' ')[1]);
          localStorage.setItem('refreshToken', refreshToken);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return getNewToken;
};

export { useToken };
