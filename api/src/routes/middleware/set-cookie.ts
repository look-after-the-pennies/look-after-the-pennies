import { NextFunction, Request, Response } from 'express';

const setCookie = (req: Request, res: Response, next: NextFunction) => {
  if (req.path == '/auth/login') {
    return next();
  }

  if (req.dbSession && req.dbSession.userSession) {
    try {
      const session = req.dbSession.userSession.session;
      //   console.log('setting auth cookie');
      //   console.log(session);

      res.cookie(
        'X-LATP-Auth-Token',
        {
          accessToken: session.access_token,
          refreshToken: session.refresh_token,
        },
        {
          expires: session.expire_at,
          path: '/',
          httpOnly: true,
          // TODO: Will likely cause problems in production if running on separate subdomain + enable secure
          // TODO: XSRF / CSRF Token
          // secure: true,
          sameSite: 'strict',
          signed: true,
        }
      );
      next();
      // });
    } catch (err: any) {
      console.log('set-cookie error');
      console.log(err);
      res.status(500).send(err.message);
    }
  } else {
    console.log('setting session - no cookie');
    res.status(401).send('Unauthorised');
  }
};

export default setCookie;
