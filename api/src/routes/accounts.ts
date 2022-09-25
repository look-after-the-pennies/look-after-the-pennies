import { Router } from 'express';
import Accounts from '../services/accounts';
import { setRequestUser } from './middleware/set-user';

const AccountsRouter = Router();
AccountsRouter.use(setRequestUser);

// === Get Accounts ====

AccountsRouter.get('/', async function (req, res) {
  console.log(JSON.stringify(req.currentUser));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .accountsList()
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

// === Upsert Account Type ====

AccountsRouter.post('/type', async function (req, res) {
  console.log(JSON.stringify(req.currentUser));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .upsertAccountType(req.body)
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

AccountsRouter.delete('/type', async function (req, res) {
  console.log(JSON.stringify(req.currentUser));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .deleteAccountType(req.body)
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
  console.log(JSON.stringify(req.currentUser));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .upsertAccount(req.body)
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

AccountsRouter.delete('/', async function (req, res) {
  console.log(JSON.stringify(req.currentUser));
  console.log(req.body);

  const accounts = new Accounts();

  accounts
    .deleteAccount(req.body)
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
