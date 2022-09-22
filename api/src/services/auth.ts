import Database from '../database/index';
import type { UserDetails } from '../types/auth';

export default class Auth {
  async login(userDetails: UserDetails): Promise<any> {
    // const payload = req.email
    //   ? { email: req.email, password: req.password }
    //   : { refreshToken: req.refreshToken };
    console.log(userDetails);

    const { data, error } = await Database.auth.signInWithPassword(userDetails);
    if (error) {
      console.log(JSON.stringify(error));
      console.log('error in auth service');
      throw error;
    }
    return data;
  }

  async signup(userDetails: UserDetails): Promise<any> {
    const { data, error } = await Database.auth.signUp(userDetails);
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(data);
    return data;
  }
}
