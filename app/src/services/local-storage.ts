import type { UserInfo } from '../../types';
import { tokenExpired } from './auth';

const userInfo = async (): Promise<UserInfo | null> => {
  const userInfo = localStorage.getItem('user-info');
  const user: UserInfo = userInfo ? JSON.parse(userInfo) : null;

  if (user) {
    const rememberMe = user.rememberMe;
    const expired = tokenExpired(user.tokenExpiresAt);
    // TODO: Add a check when browser is closed to delete the data
    if (expired && !rememberMe) {
      localStorage.removeItem('user-info');
    } else return user;
  }
  return null;
};

const localStorageParser = {
  userInfo: userInfo,
};

export default localStorageParser;
