import { Router } from 'express';
import AccountsRouter from './accounts';
import AuthRouter from './auth';
import TransactionsRouter from './transactions';
import setSession from './middleware/set-session';
import setCookie from './middleware/set-cookie';

const router = Router();

router.use(setSession);
router.use(setCookie);
router.use('/auth', AuthRouter);
router.use('/accounts', AccountsRouter);
router.use('/transactions', TransactionsRouter);

export default router;
