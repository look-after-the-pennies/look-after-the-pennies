import { tokenExpired, refreshToken } from './auth';
import type { UserStoreDetails } from '../../types';

const session = async (): Promise<UserStoreDetails> => {
  const session = localStorage.getItem('session');

  const userFields = {} as UserStoreDetails;

  if (session) {
    const rememberMe = localStorage.getItem('remember-me');
    userFields.rememberMe = rememberMe ? true : false;

    const sessionParsed = JSON.parse(session);
    // console.log('session parsed');
    // console.log(sessionParsed);

    userFields.userId = sessionParsed.user.id;
    userFields.email = sessionParsed.user.email;

    userFields.expiresAt = sessionParsed.expires_at;

    const expired = tokenExpired(userFields.expiresAt!);
    // console.log(`local storage parser expired: ${expired}`);

    if (expired) {
      if (userFields.rememberMe) {
        try {
          const refresh = await refreshToken(sessionParsed.refresh_token);
          console.log('refresh token response');
          console.log(refresh);
          if (refresh.access_token) {
            userFields.loggedIn = true;
            userFields.accessToken = refresh.access_token;
            userFields.refreshToken = refresh.refresh_token;
          } else {
            localStorage.removeItem('session');
            userFields.expiresAt = undefined;
          }
        } catch (err) {
          console.log('Refresh failed');
        }
      }
    } else {
      userFields.loggedIn = true;
      userFields.accessToken = sessionParsed.access_token;
      userFields.refreshToken = sessionParsed.refresh_token;
    }
  }
  return userFields;
};

const localStorageParser = {
  session: session,
};

export default localStorageParser;
