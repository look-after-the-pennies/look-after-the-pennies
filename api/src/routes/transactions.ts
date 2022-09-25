import { Router } from 'express';
import Transactions from '../services/transactions';
import setSession from './middleware/set-session';

const TransactionsRouter = Router();
TransactionsRouter.use(setSession);

// === Get Transactions ====

TransactionsRouter.get('/', async function (req, res) {
  console.log('logging current session from request');
  console.log(JSON.stringify(req.currentSession));
  const transactions = new Transactions();

  transactions
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

// === Upsert Transaction Type ====

TransactionsRouter.post('/type', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const transactions = new Transactions();

  transactions
    .upsertTransactionType(req.body)
    .then((type) => {
      console.log(JSON.stringify(type));
      res.status(200).send(type);
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

// === Delete Transaction Type ====

TransactionsRouter.delete('/type', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const transactions = new Transactions();

  transactions
    .deleteTransactionType(req.body)
    .then((type) => {
      console.log(JSON.stringify(type));
      res.status(200).send(type);
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

// === Upsert Transaction Category ====

TransactionsRouter.post('/category', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const transactions = new Transactions();

  transactions
    .upsertTransactionCategory(req.body)
    .then((category) => {
      console.log(JSON.stringify(category));
      res.status(200).send(category);
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

// === Delete Transaction Category ====

TransactionsRouter.delete('/category', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const transactions = new Transactions();

  transactions
    .deleteTransactionCategory(req.body)
    .then((category) => {
      console.log(JSON.stringify(category));
      res.status(200).send(category);
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

// === Upsert Transaction ====

TransactionsRouter.post('/', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const transactions = new Transactions();

  transactions
    .upsertTransaction(req.body)
    .then((transaction) => {
      console.log(JSON.stringify(transaction));
      res.status(200).send(transaction);
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

// === Delete Transaction ====

TransactionsRouter.delete('/', async function (req, res) {
  console.log(JSON.stringify(req.currentSession));
  console.log(req.body);

  const transactions = new Transactions();

  transactions
    .deleteTransaction(req.body)
    .then((transaction) => {
      console.log(JSON.stringify(transaction));
      res.status(200).send(transaction);
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

export default TransactionsRouter;
