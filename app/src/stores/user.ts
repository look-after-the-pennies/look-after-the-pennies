import { defineStore } from 'pinia';
import type { UserInfo } from '../../types';
// import LocalStorage from '../services/local-storage';

// import Http from '../services/http';
// const apiURL = process.env.API_URL;

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: (localStorage.getItem('user-info') || null) as UserInfo | null,
    };
  },
  getters: {},
  actions: {
    // async init() {
    //   const localStorage = await LocalStorage.userInfo();
    //   console.log('user localstorage parsed');
    //   console.log(localStorage);
    //   return localStorage;
    //   // this.user = localStorage;
    // },

    logout() {
      const user = useUserStore();
      localStorage.removeItem('session');
      localStorage.removeItem('remember-me');
      user.$reset();
      this.router.push({ name: 'Login' });
    },
  },
});
