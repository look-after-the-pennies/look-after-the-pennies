import { Router } from 'express';
import Auth from '../services/auth';

const AuthRouter = Router();

// === SIGNUP & LOGIN ====

AuthRouter.post('/:action', async function (req, res) {
	//console.log(req)
	const reqBody =
		req.params.action === 'signup' ? { ...req.body, signup: true } : req.body;

	try {
		const auth = new Auth();
		//console.log(reqBody);
		const userDetails = await auth.authenticate(reqBody);
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
