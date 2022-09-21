export interface UserStoreDetails {
  email: string;
  rememberMe: boolean;
  userId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number | undefined;
  loggedIn: boolean;
}
