import { defineStore } from 'pinia';
import type { UserStoreDetails } from '../../types';
import Http from '../services/http';
import LocalStorage from '../services/local-storage';

const apiURL = process.env.API_URL;

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      details: {} as UserStoreDetails,
    };
  },
  getters: {},
  actions: {
    async initialise() {
      const localStorage = await LocalStorage.session();
      console.log('user localstorage parsed');
      console.log(localStorage);
      this.details = localStorage;
    },

    async login(payload: {
      email: string;
      password: string;
      rememberMe: boolean;
    }) {
      const { email, password, rememberMe } = payload;
      const http = new Http();

      const requestURL = `${apiURL}/auth/login`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const body = { email, password };
      //console.log(`body: ${body}`);
      try {
        const response = await http
          .request('post', requestURL, headers, body)
          .then((response) => {
            // console.log('login response:');
            // console.log(response);

            if (response.status === 200) {
              //localStorage.setItem('user', JSON.stringify(response.data.user));
              localStorage.setItem(
                'session',
                JSON.stringify(response.data.session)
              );
              if (rememberMe) {
                localStorage.setItem(
                  'remember-me',
                  JSON.stringify({ remember_me: rememberMe, email: email })
                );
              }

              this.details.email = email;
              this.details.rememberMe = rememberMe;
              this.details.userId = response.data.user.id;
              this.details.accessToken = response.data.session.access_token;
              this.details.refreshToken = response.data.session.refresh_token;
              this.details.expiresAt = response.data.session.expires_at;
              this.details.loggedIn = true;

              const requestedPage = localStorage.getItem('requestedPage');
              const pushPage = requestedPage ? requestedPage : '/';
              if (requestedPage) localStorage.removeItem('requestedPage');

              this.router.push(pushPage);
              return response;
            } else {
              throw 'Login failed status code';
            }
          });
      } catch (err: any) {
        //return error;
        throw 'Login failed';
      }
    },
    logout() {
      const user = useUserStore();
      localStorage.removeItem('session');
      localStorage.removeItem('remember-me');
      user.$reset();
      this.router.push({ name: 'Login' });
    },
  },
});
