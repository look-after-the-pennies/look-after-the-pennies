import { defineStore } from 'pinia';
import type { Accounts, AccountTypes, AddAccount } from '../../types';

import Http from '../services/http';
const apiURL = process.env.API_URL;

export const useAccountsStore = defineStore('accounts', {
  state: () => {
    return {
      accountTypes: [] as AccountTypes[],
      accounts: [] as Accounts[],
    };
  },
  getters: {},
  actions: {
    async get() {
      const http = new Http();
      const requestURL = `${apiURL}/accounts`;
      try {
        const response = await http.request('get', requestURL);
        this.accounts = response.data;
        console.log('Pinia accounts fetched successfully');
      } catch (error) {
        console.log(error);
        // let the form component display the error
        return error;
      }
    },
    async getTypes() {
      const http = new Http();
      const requestURL = `${apiURL}/accounts/types`;
      try {
        const response = await http.request('get', requestURL);
        this.accountTypes = response.data;
        console.log('Pinia account types fetched successfully');
      } catch (error) {
        console.log(error);
        // let the form component display the error
        return error;
      }
    },
    async create(account: AddAccount): Promise<AddAccount> {
      const http = new Http();
      const requestURL = `${apiURL}/accounts`;
      const headers = {
        'Content-Type': 'application/json',
      };

      await http
        .request('post', requestURL, headers, account)
        .then((res) => {
          if (res.status === 200) {
            console.log('store response');
            console.log(res);
            if (res.data) {
              this.accountTypes = res.data;
              return;
            }
            // return res.data;
          } else throw new Error(res.message);
        })
        .catch((err) => {
          console.log('Accounts store error: ' + err);
          throw new Error(err);
        });
    },
  },
  // async getTypes() {
  //   await Accounts.getTypes().then(())
  // },
  // async init() {
  //   const localStorage = await LocalStorage.userInfo();
  //   console.log('user localstorage parsed');
  //   console.log(localStorage);
  //   return localStorage;
  //   // this.user = localStorage;
  // },
  // logout() {
  //   const user = useUserStore();
  //   localStorage.removeItem('session');
  //   localStorage.removeItem('remember-me');
  //   user.$reset();
  //   this.router.push({ name: 'Login' });
  // },
});
