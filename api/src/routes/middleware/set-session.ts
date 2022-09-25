import { NextFunction, Request, Response } from 'express';
import SessionService from '../../services/session';
import type { Session } from '../../types/auth';

const setSession = async (req: Request, res: Response, next: NextFunction) => {
  const authCookie = req.signedCookies['X-LATP-Auth-Token'];
  try {
    const sessionService = new SessionService(authCookie);
    await sessionService.setSession().then((session) => {
      if (sessionService.userSession) {
        const userSession = sessionService.userSession;
        console.log(JSON.stringify(userSession));
        req.currentSession = userSession;
        res.cookie(
          'X-LATP-Auth-Token',
          {
            accessToken: userSession.session.access_token,
            refreshToken: userSession.session.refresh_token,
          },
          {
            expires: userSession.session.expire_at,
            path: '/',
            httpOnly: true,
            // TODO: Will likely cause problems in production if running on separate subdomain + enable secure
            // TODO: XSRF / CSRF Token
            // secure: true,
            sameSite: 'strict',
            signed: true,
          }
        );
      }
      next();
    });
  } catch (err: any) {
    console.log('set-session error');
    console.log(err);
    res.status(400).send(err.message);
  }
  // await auth
  //   .setUser(authCookie.refreshToken)
  //   .then((res) => {
  //     if (res.session) req.currentUser = res;
  //     next();
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     res.status(400).send(err.message);
  //   });
};

export default setSession;
