import { NextFunction, Request, Response } from 'express';
import SessionService from '../../services/session';

const setSession = async (req: Request, res: Response, next: NextFunction) => {
  if (req.path == '/auth/login') {
    return next();
  }

  const authCookie = req.signedCookies['X-LATP-Auth-Token'];
  if (authCookie) {
    try {
      // console.log('found cookie');
      // console.log(authCookie);
      const db = new SessionService(authCookie);
      await db.createDbClient();
      await db.setSession();

      req.dbSession = db;
      if (db.errorMsg) throw db.errorMsg.message;

      next();
    } catch (err: any) {
      console.log('set-session error');
      console.log(err);
      res.status(400).send(err.message);
    }
  } else {
    console.log('setting session - no cookie');
    res.status(401).send('Unauthorised');
  }
};

export default setSession;
