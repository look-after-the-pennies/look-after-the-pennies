import { Express, NextFunction, Request, request, Response } from 'express';
import Auth from '../../services/auth';
const auth = new Auth();

const setUser = async (req: Request, res: Response, next: NextFunction) => {
  const authCookie = req.signedCookies['X-LATP-Auth-Token'];
  const user = await auth.getUser(authCookie);
  if (user) req.currentUser = user;
  next();
};

export function setRequestUser(app: Express): void {
  // Make your Express app use your custom middleware:
  app.use(setUser);
}
