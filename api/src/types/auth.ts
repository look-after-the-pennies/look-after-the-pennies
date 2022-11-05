export interface UserDetails {
  email: string;
  password: string;
  refreshToken?: string;
}

export type AuthActions = 'login' | 'signup';

export interface AuthCookie {
  accessToken: string;
  refreshToken: string;
}

export interface Session {
  user: any;
  session: {
    access_token: string;
    refresh_token: string;
    expire_at: Date | undefined;
  };
}
export interface SessionError {
  name: string;
  message: string;
  status?: number;
}
