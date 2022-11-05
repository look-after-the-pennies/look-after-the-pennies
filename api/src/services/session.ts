import type { AuthCookie, Session, SessionError } from '../types/auth';

import { createClient } from '@supabase/supabase-js';
import dotEnv from '../config/dotenv';
import type { Database } from '../types/database';

export default class DBSession {
  authCookie: AuthCookie;
  accessToken: string;
  refreshToken: string;
  dbClient?: any;
  userSession?: Session;
  resCookie?: any;
  notAuthorised?: boolean;
  errorMsg?: SessionError;

  constructor(authCookie: AuthCookie) {
    this.authCookie = authCookie;
    this.accessToken = authCookie.accessToken;
    this.refreshToken = authCookie.refreshToken;
  }

  async createDbClient() {
    const client = createClient<Database>(
      dotEnv.SUPABASE_URL,
      dotEnv.SUPABASE_ANON_KEY,
      {
        db: {
          schema: 'public',
        },
        auth: {
          persistSession: true,
          autoRefreshToken: false,
        },
        global: {
          // @ts-ignore
          headers: this.accessToken
            ? {
                Authorization: `Bearer ${this.accessToken}`,
              }
            : null,
        },
      }
    );

    this.dbClient = client;
  }

  async setSession() {
    try {
      const { data, error } = await this.dbClient.auth.setSession({
        access_token: this.accessToken,
        refresh_token: this.refreshToken,
      });

      if (error) {
        this.notAuthorised = true;
        this.errorMsg = error;
        return;
      }

      if (data) {
        // @ts-ignore
        this.userSession = data;
        return;
      }
    } catch (err) {
      console.log('session service error');
      throw err;
    }
  }
}
