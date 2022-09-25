import { Router } from 'express';
import AccountsRouter from './accounts';
import AuthRouter from './auth';
import TransactionsRouter from './transactions';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/accounts', AccountsRouter);
router.use('/transactions', TransactionsRouter);

export default router;
