import DB from '../database/index';
import type { UserDetails } from '../types/auth';
import ErrorHandler from './errors';

export default class Auth {
  async login(userDetails: UserDetails): Promise<any> {
    const { data, error } = await DB.auth.signInWithPassword(userDetails);
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async signup(userDetails: UserDetails): Promise<any> {
    const { data, error } = await DB.auth.signUp(userDetails);
    if (error) ErrorHandler.dbRequest(error);
    console.log(data);
    return data;
  }
}
