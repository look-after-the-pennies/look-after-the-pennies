// TODO: Deprecate refresh items, handle server side
import { useUserStore } from 'stores/user';
import type { AuthResponse } from '../../types';
import Http from './http';
const apiURL = process.env.API_URL;
const store = useUserStore();

export const login = async (
  email: string,
  password: string,
  rememberMe: boolean
): Promise<AuthResponse> => {
  const http = new Http();

  const requestURL = `${apiURL}/auth/login`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = { email, password };
  return await http
    .request('post', requestURL, headers, body)
    .then((res) => {
      if (res.status === 200) {
        if (rememberMe)
          localStorage.setItem(
            'remember-me',
            JSON.stringify({ remember_me: rememberMe, email: email })
          );

        const requestedPage = localStorage.getItem('requested-page');
        const pushPage = requestedPage ? requestedPage : '/test';
        if (requestedPage) localStorage.removeItem('requested-page');
        return { status: res, message: 'Login successful', pushPage: pushPage };
      } else throw new Error(res.message);
    })
    .catch((err) => {
      return {
        status: 'Error',
        message: err,
      };
    });
};

export const logout = async (): Promise<AuthResponse> => {
  const http = new Http();

  const requestURL = `${apiURL}/auth/logout`;
  const headers = {
    'Content-Type': 'application/json',
  };

  return await http
    .request('post', requestURL, headers, null, true)
    .then((res) => {
      if (res.status === 200) {
        const pushPage = '/login';
        localStorage.removeItem('user-info');
        store.$reset();

        return {
          status: res,
          message: 'Logged out',
          pushPage: pushPage,
        };
      } else throw new Error(res.message);
    })
    .catch((err) => {
      return {
        status: 'Error',
        message: err,
      };
    });
};

export const signup = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const http = new Http();

  const requestURL = `${apiURL}/auth/signup`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = { email, password };
  return await http
    .request('post', requestURL, headers, body, false)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        const requestedPage = localStorage.getItem('requested-page');
        const pushPage = requestedPage ? requestedPage : '/';
        if (requestedPage) localStorage.removeItem('requested-page');

        return {
          status: res,
          message: 'Signup successful - Please confirm your email address',
          pushPage: pushPage,
        };
      } else throw new Error(res.message);
    })
    .catch((err) => {
      return {
        status: 'Error',
        message: err,
      };
    });
};

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
    await http.request('post', requestURL, headers, body).then((response) => {
      if (response.status === 200) {
        localStorage.setItem('session', JSON.stringify(response.data.session));
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
