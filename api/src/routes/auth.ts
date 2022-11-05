import { Router } from 'express';
import DB from '../database/index';
import ErrorHandler from '../services/errors';

const AuthRouter = Router();

//  =============================
//  ======== POST Login =========
//  =============================

AuthRouter.post('/login', async function (req, res) {
  try {
    const { data, error } = await DB.auth.signInWithPassword(req.body);
    if (error) ErrorHandler.dbRequest(error);
    const session = data.session ? data.session : null;

    if (!session) ErrorHandler.dbRequest('Server error');

    if (session) {
      const expiresAt = session.expires_at
        ? new Date(session.expires_at * 1000)
        : undefined;

      res.cookie(
        'X-LATP-Auth-Token',
        {
          accessToken: session.access_token,
          refreshToken: session.refresh_token,
        },
        {
          expires: expiresAt,
          path: '/',
          httpOnly: true,
          // TODO: Will likely cause problems in production if running on separate subdomain + enable secure
          // TODO: XSRF / CSRF Token
          // secure: true,
          sameSite: 'strict',
          signed: true,
        }
      );
      res.status(200).json({
        user_id: session.user.id,
        email: session.user.email,
        expires_at: session.expires_at,
      });
    }
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

//  =============================
//  ======== POST Logout ========
//  =============================

AuthRouter.post('/logout', async function (req, res) {
  const authToken = req.signedCookies['X-LATP-Auth-Token'];

  if (authToken) {
    res
      .clearCookie('X-LATP-Auth-Token', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        signed: true,
      })
      .status(200)
      .send('Logged out');
  } else {
    res.status(400).send('Error');
  }
});

//  =============================
//  ======== POST Signup ========
//  =============================

AuthRouter.post('/signup', async function (req, res) {
  try {
    const { data, error } = await DB.auth.signUp(req.body);
    if (error) ErrorHandler.dbRequest(error);
    const session = data.session ? data.session : null;
    const user = data.user ? data.user : null;

    if (!session || !user) ErrorHandler.dbRequest('Server error');
    else {
      if (
        !session &&
        user.id &&
        !user.email_confirmed_at &&
        user.confirmation_sent_at
      ) {
        res
          .status(201)
          .send(
            'Signup successful! Please confirm your email address before logging in.'
          );
        return;
      }
      res.status(200).send('Success');
    }
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

export default AuthRouter;
