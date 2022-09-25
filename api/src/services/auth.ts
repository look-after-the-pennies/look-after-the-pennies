import DB from '../database/index';
import type { AuthCookie, UserDetails } from '../types/auth';
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

  async getUser(authCookie: AuthCookie) {
    const {
      data: { user },
    } = await DB.auth.getUser(authCookie.accessToken);
    console.log(JSON.stringify(user));
    return user ? user : await this.setUser(authCookie.refreshToken);
  }

  async setUser(refreshToken: string) {
    const { data, error } = await DB.auth.setSession(refreshToken);
    console.log(JSON.stringify(data));
    if (error) ErrorHandler.dbRequest(error);
    return data.user;
  }
}
