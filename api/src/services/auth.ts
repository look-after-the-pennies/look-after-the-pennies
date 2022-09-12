import Database from '../database/index';

interface UserDetails {
	email?: string;
	password?: string;
	refreshToken?: string;
	signup?: boolean;
}

export default class Auth {
	async authenticate(req: UserDetails): Promise<any> {
		const payload = req.email
			? { email: req.email, password: req.password }
			: { refreshToken: req.refreshToken };

		const { user, session, error } = req.signup
			? await Database.auth.signUp(payload)
			: await Database.auth.signIn(payload);
		if (error) {
			console.log(error);
			throw error;
		}
		return { user, session };
	}
}
