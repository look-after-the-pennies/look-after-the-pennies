import { Router } from 'express';
import Auth from '../services/auth';

const AuthRouter = Router();

// === SIGNUP & LOGIN ====

AuthRouter.post('/:action', async function (req, res) {
  const action = req.params.action;
  //console.log(req)

  try {
    const auth = new Auth();
    //console.log(reqBody);

    const userDetails = async () => {
      if (action === 'login') return await auth.login(req.body);
      if (action === 'signup') return await auth.signup(req.body);
    };
    //console.log(JSON.stringify(userDetails));
    res.send(userDetails);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(JSON.stringify(err));
    } else {
      res.status(500).send(JSON.stringify(err));
    }
  }
});

export default AuthRouter;
