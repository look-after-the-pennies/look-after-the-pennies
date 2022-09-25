import { Router } from 'express';
import AuthRouter from './auth';
import AccountsRouter from './accounts';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/accounts', AccountsRouter);

export default router;
