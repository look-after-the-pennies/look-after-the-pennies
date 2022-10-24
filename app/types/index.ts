export interface UserStoreDetails {
  email: string;
  rememberMe: boolean;
  userId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number | undefined;
  loggedIn: boolean;
}

export interface UserInfo {
  id: string;
  email: string;
  expires_at: number;
  remember_me: boolean;
  logged_in: boolean;
}

export interface AuthResponse {
  status: string;
  message: string;
  pushPage?: string;
}

export interface AccountTypes {
  id: number;
  account_type: string;
}

export interface Accounts {
  id: string;
  user_id: string | null;
  account_type_id: number | null;
  account_name: string | null;
  logo: string | null;
}

export interface AddAccount {
  account_type_id: number;
  account_name: string;
  logo: string | null;
  opening_balance: number;
  date_started: string | undefined;
}
