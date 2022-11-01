import { Router } from 'express';
import Accounts from '../services/accounts';
import setSession from './middleware/set-session';

const AccountsRouter = Router();
AccountsRouter.use(setSession);

// === Get Accounts ====

AccountsRouter.get('/', async function (req, res) {
  console.log('logging current session from request');
  console.log(JSON.stringify(req.currentSession));
  const accounts = new Accounts();

  accounts
    .get()
    .then((accounts: any) => {
      res.status(200).send(accounts);
    })
    .catch((err: any) => {
      console.log(err);
      if (err.status) {
        res.status(err.status).send(err.message);
      } else {
        console.log('hitting 500 error');
        res.status(500).send('Server error');
      }
    });
});

// === Get Account Types ====

AccountsRouter.get('/types', async function (req, res) {
  // console.log('logging current session from request');
  // console.log(JSON.stringify(req.currentSession));
  const accounts = new Accounts();

  accounts
    .getTypes()
    .then((accounts: any) => {
      res.status(200).send(accounts);
    })
    .catch((err: any) => {
      console.log(err);
      if (err.status) {
        res.status(err.status).send(err.message);
      } else {
        console.log('hitting 500 error');
        res.status(500).send('Server error');
      }
    });
});

// === Upsert Account Type ====

AccountsRouter.post('/types', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .upsertType(req.body)
    .then((res) => {
      console.log(JSON.stringify(res));
      res.status(200).send({});
    })
    .catch((err: any) => {
      console.log(err.message);
      console.log(err.status);

      console.log(err);
      if (err.status) {
        res.status(err.status).send(err.message);
      } else {
        console.log('hitting 500 error');
        res.status(500).send('Server error');
      }
    });
});

// === Delete Account Type ====

AccountsRouter.delete('/types', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .deleteType(req.body)
    .then((res) => {
      console.log(JSON.stringify(res));
      res.status(200).send({});
    })
    .catch((err: any) => {
      console.log(err.message);
      console.log(err.status);

      console.log(err);
      if (err.status) {
        res.status(err.status).send(err.message);
      } else {
        console.log('hitting 500 error');
        res.status(500).send('Server error');
      }
    });
});

// === Upsert Account ====

AccountsRouter.post('/', async function (req, res) {
  console.log('request current session');
  console.log(JSON.stringify(req.currentSession));
  // console.log(req.body);

  const accounts = new Accounts();
  console.log('got to post');
  console.log(req.body);
  accounts
    .upsert(
      req.body,
      req.currentSession.session.refresh_token,
      req.currentSession.session.access_token
    )
    .then((res) => {
      console.log('post response body');
      console.log(JSON.stringify(res));
      res.status(200).send({});
    })
    .catch((err: any) => {
      // console.log(err.message);
      // console.log(err.status);

      // console.log(err);
      if (err.status) {
        res.status(err.status).send(err.message);
      } else {
        console.log('hitting 500 error');
        res
          .status(500)
          .send(err.message ? err.message : err ? err : 'Server error');
      }
    });
});

// === Delete Account Type ====

AccountsRouter.delete('/', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .delete(req.body)
    .then((res) => {
      console.log(JSON.stringify(res));
      res.status(200).send({});
    })
    .catch((err: any) => {
      console.log(err.message);
      console.log(err.status);

      console.log(err);
      if (err.status) {
        res.status(err.status).send(err.message);
      } else {
        console.log('hitting 500 error');
        res.status(500).send('Server error');
      }
    });
});

export default AccountsRouter;
