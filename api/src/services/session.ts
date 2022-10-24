import DB from '../database/index';
import type { AuthCookie, Session } from '../types/auth';
import ErrorHandler from './errors';

export default class Auth {
  authCookie: AuthCookie;
  userSession: Session | undefined;

  constructor(authCookie: AuthCookie) {
    this.authCookie = authCookie;
  }

  async getUser() {
    console.log('getting user from supabase');
    const {
      data: { user },
    } = await DB.auth.getUser(this.authCookie.accessToken);
    // console.group('user returned from supabase');
    // console.log(JSON.stringify(user));
    return user ? user : await this.setSession();
  }

  async setSession() {
    // console.log('setting session on supabase');
    try {
      const { data, error } = await DB.auth.setSession(
        this.authCookie.refreshToken
      );
      // console.log('user returned from setting supabase session');
      // console.log(JSON.stringify(data));
      if (error) throw error;

      if (data.session) {
        // @ts-ignore
        this.userSession = data;
        return;
      }
    } catch (err) {
      console.log('session service error');
      throw err;
      // @ts-ignore
    }
  }
}
