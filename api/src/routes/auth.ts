import { Router } from 'express';
import Auth from '../services/auth';

const AuthRouter = Router();

// === SIGNUP & LOGIN ====

AuthRouter.post('/:action', async function (req, res) {
  const action = req.params.action;
  console.log(action);
  console.log(req.body);
  const auth = new Auth();

  try {
    let userDetails;
    if (action === 'login') userDetails = await auth.login(req.body);
    else if (action === 'signup') userDetails = await auth.signup(req.body);
    else res.status(403).send('Invalid endpoint');
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
