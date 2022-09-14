export interface UserDetails {
  email: string;
  password: string;
  refreshToken?: string;
}

export type AuthActions = 'login' | 'signup';
