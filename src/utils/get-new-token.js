const getNewToken = async (getToken) => {
  const token = localStorage.getItem('refreshToken');

  try {
    if (token) {
      const res = await getToken({ token });
      const { data: tokens } = res;
      const { accessToken, refreshToken } = tokens;

      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken.split(' ')[1]);
        localStorage.setItem('refreshToken', refreshToken);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export { getNewToken };
