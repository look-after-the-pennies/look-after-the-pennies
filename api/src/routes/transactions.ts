import { Router } from 'express';
import ErrorHandler from '../services/errors';

const TransactionsRouter = Router();

//  |||||||||||||||||||||||||||||||||
//  ========= TRANSACTIONS ==========
//  |||||||||||||||||||||||||||||||||

//  =================================
//  ======== GET Transactions =======
//  =================================

TransactionsRouter.get('/', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db.from('transactions').select(
      `id, account_id, transaction_type_id, transaction_category_id, transaction_timestamp, transaction_reference,
        additional_information, amount, manual_entry, csv_entry, auto_sync_entry, created_by, created_at`
    );

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

//  ==================================
//  ======== POST Transaction ========
//  ==================================

TransactionsRouter.post('/', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db.from('transactions').upsert(req.body);

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

//  ====================================
//  ======== DELETE Transaction ========
//  ====================================

TransactionsRouter.delete('/', async function (req, res) {
  const db = req.dbSession.dbClient;

  try {
    const { data, error } = await db
      .from('transactions')
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

//  |||||||||||||||||||||||||||||||||||||||||||
//  ========= TRANSACTION CATEGORIES ==========
//  |||||||||||||||||||||||||||||||||||||||||||

//  ===========================================
//  ======== GET Transaction Categories =======
//  ===========================================

TransactionsRouter.get('/categories', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db
      .from('transaction_categories')
      .select(
        'id, transaction_category, transaction_category_description, icon, default_category, active, created_by'
      );

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

//  =============================================
//  ======== POST Transaction Categories ========
//  =============================================

TransactionsRouter.post('/categories', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db
      .from('transaction_categories')
      .upsert(req.body);

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

//  ===============================================
//  ======== DELETE Transaction Categories ========
//  ===============================================

TransactionsRouter.delete('/categories', async function (req, res) {
  const db = req.dbSession.dbClient;

  try {
    const { data, error } = await db
      .from('transaction_categories')
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

//  ||||||||||||||||||||||||||||||||||||||
//  ========= TRANSACTION TYPES ==========
//  ||||||||||||||||||||||||||||||||||||||

//  ======================================
//  ======== GET Transaction Types =======
//  ======================================

TransactionsRouter.get('/types', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db
      .from('transaction_types')
      .select('id, transaction_type')
      .eq('active', true);

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

//  ========================================
//  ======== POST Transaction Types ========
//  ========================================

TransactionsRouter.post('/types', async function (req, res) {
  const db = req.dbSession.dbClient;
  try {
    const { data, error } = await db.from('transaction_types').upsert(req.body);

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

//  ==========================================
//  ======== DELETE Transaction Types ========
//  ==========================================

TransactionsRouter.delete('/types', async function (req, res) {
  const db = req.dbSession.dbClient;

  try {
    const { data, error } = await db
      .from('transaction_types')
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

export default TransactionsRouter;
