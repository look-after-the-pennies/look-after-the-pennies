// TODO: Deprecate refresh items, handle server side
import { useAccountsStore } from 'stores/accounts';
import type { AuthResponse } from '../../types';
import Http from './http';
const apiURL = process.env.API_URL;
const store = useAccountsStore();

const get = async (): Promise<AuthResponse> => {
  const http = new Http();

  const requestURL = `${apiURL}/accounts`;

  return await http
    .request('get', requestURL)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        store.accounts = res.data;
        return res;
      } else throw new Error(res.message);
    })
    .catch((err) => {
      return {
        status: 'Error',
        message: err,
      };
    });
};

const getTypes = async () => {
  const http = new Http();
  const requestURL = `${apiURL}/accounts/types`;

  return await http
    .request('get', requestURL)
    .then((res) => {
      console.log('received a response');
      if (res.status === 200) {
        console.log('received a 200 response');
        store.accountTypes = res.data;

        return res.data;
      } else throw new Error(res.message);
    })
    .catch((err) => {
      return {
        status: 'Error',
        message: err,
      };
    });
};

const create = async (
  name: string,
  typeId: number,
  openingBalance: number,
  dateStarted: string
): Promise<AuthResponse> => {
  const http = new Http();

  const requestURL = `${apiURL}/accounts`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
    account_name: name,
    account_type_id: typeId,
    opening_balance: openingBalance,
    date_started: dateStarted,
  };

  return await http
    .request('post', requestURL, headers, body)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        store.accounts = res.data;
        return res;
      } else throw new Error(res.message);
    })
    .catch((err) => {
      return {
        status: 'Error',
        message: err,
      };
    });
};

const accounts = {
  get: get,
  getTypes: getTypes,
  create: create,
};

export default accounts;
