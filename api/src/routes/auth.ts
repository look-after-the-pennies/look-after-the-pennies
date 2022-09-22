import { Router } from 'express';
import Auth from '../services/auth';
// import type { AuthRequest } from '../types/http';

const AuthRouter = Router();

// === SIGNUP & LOGIN ====

AuthRouter.post('/login', async function (req, res) {
  // console.log(req.body);

  const auth = new Auth();
  const authToken = req.signedCookies['X-LATP-Auth-Token'];

  // Cookies that have been signed
  // TODO: Fix types not working for extended request object
  // @ts-ignore
  console.log('Auth Cookie: ', authToken);

  try {
    const userDetails = await auth.login(req.body);
    // console.log(userDetails);
    const session = userDetails.session ? userDetails.session : null;

    if (session) {
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
    }

    res.status(200).send('Success');
  } catch (err: any) {
    console.log(err.message);
    console.log(err.status);

    console.log(err);
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      console.log('hitting 500 error');
      res.status(500).send('Server error');
    }
  }
});

// TODO: Only sometimes clering cookie
AuthRouter.post('/logout', async function (req, res) {
  // @ts-ignore
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

AuthRouter.post('/signup', async function (req, res) {
  console.log(req.body);
  const authToken = req.signedCookies['X-LATP-Auth-Token'];

  const auth = new Auth();

  // Cookies that have been signed
  // @ts-ignore
  console.log('Auth Cookie: ', authToken);

  try {
    const userDetails = await auth.signup(req.body);

    console.log(userDetails);
    const session = userDetails.session ? userDetails.session : null;

    if (
      !session &&
      userDetails.user.id &&
      !userDetails.user.email_confirmed_at &&
      userDetails.user.confirmation_sent_at
    ) {
      res
        .status(401)
        .send('You must confirm your email address before attempting to login');
      return;
    }
    res.status(200).send('Success');
  } catch (err: any) {
    console.log(err.message);
    console.log(err.status);

    console.log(err);
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      console.log('hitting 500 error');
      res.status(500).send('Server error');
    }
  }
});

export default AuthRouter;
