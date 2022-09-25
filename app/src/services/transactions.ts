// TODO: Deprecate refresh items, handle server side
import { useUserStore } from 'stores/user';
import type { AuthResponse } from '../../types';
import Http from './http';
const apiURL = process.env.API_URL;
const store = useUserStore();

export const get = async (): Promise<AuthResponse> => {
  const http = new Http();

  const requestURL = `${apiURL}/transactions`;

  return await http
    .request('get', requestURL)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
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

const transactions = {
  get: get,
};

export default transactions;

