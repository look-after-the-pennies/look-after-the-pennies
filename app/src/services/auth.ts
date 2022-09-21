import Http from '../services/http';
const apiURL = process.env.API_URL;

interface RefreshDetails {
  refresh_token: string;
  access_token: string;
}

export const tokenExpired = (expiresAt: number) => {
  const now = Math.floor(new Date().getTime() / 1000);
  console.log(`now: ${now}, expires: ${expiresAt}`);
  //console.log('expired');
  //console.log(expiresAt < now ? true : false);
  return expiresAt < now ? true : false;
};

export const refreshToken = async (
  refreshToken: string
): Promise<RefreshDetails> => {
  // Need to refresh token
  const http = new Http();

  const requestURL = `${apiURL}/auth/login`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = { refreshToken: refreshToken };
  const details: RefreshDetails = { refresh_token: '', access_token: '' };
  try {
    const response = await http
      .request('post', requestURL, headers, body)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem(
            'session',
            JSON.stringify(response.data.session)
          );
          details.access_token = response.data.session.access_token;
          details.refresh_token = response.data.session.refresh_token;
        } else {
          throw response;
        }
      });
  } catch (err: any) {
    //return error;
    console.log(err);
    console.log('Refresh token failed');
  }
  return details;
};
