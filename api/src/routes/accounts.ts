import { Router } from 'express';
import ErrorHandler from '../services/errors';

const AccountsRouter = Router();

//  |||||||||||||||||||||||||||||
//  ========= ACCOUNTS ==========
//  |||||||||||||||||||||||||||||

//  =============================
//  ======== Get Accounts =======
//  =============================

AccountsRouter.get('/', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db
      .from('accounts')
      .select('id, account_type_id, account_name, logo, created_at');

    if (error) ErrorHandler.dbRequest(error);
    else res.status(200).json(data);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

//  ================================
//  ======== Upsert Account ========
//  ================================

AccountsRouter.post('/', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db.from('accounts').upsert(req.body);

    if (error) ErrorHandler.dbRequest(error);
    else res.status(200).json(data);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

//  ================================
//  ======== Delete Account ========
//  ================================

AccountsRouter.delete('/', async function (req, res) {
  const db = req.dbSession.dbClient;

  try {
    const { data, error } = await db
      .from('accounts')
      .delete()
      .match({ id: req.body });

    if (error) ErrorHandler.dbRequest(error);
    else res.status(200).json(data);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

//  ||||||||||||||||||||||||||||||||||
//  ========= ACCOUNT TYPES ==========
//  ||||||||||||||||||||||||||||||||||

//  ==================================
//  ======== Get Account Types =======
//  ==================================

AccountsRouter.get('/types', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db
      .from('account_types')
      .select('id, account_type');

    if (error) ErrorHandler.dbRequest(error);
    else res.status(200).json(data);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

//  ======================================
//  ======== Upsert Account Types ========
//  ======================================

AccountsRouter.post('/types', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db.from('account_types').upsert(req.body);

    if (error) ErrorHandler.dbRequest(error);
    else res.status(200).json(data);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

//  ======================================
//  ======== Delete Account Types ========
//  ======================================

AccountsRouter.delete('/types', async function (req, res) {
  const db = req.dbSession.dbClient;

  try {
    const { data, error } = await db
      .from('account_types')
      .delete()
      .match({ id: req.body });

    if (error) ErrorHandler.dbRequest(error);
    else res.status(200).json(data);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send('Server error');
    }
  }
});

export default AccountsRouter;
