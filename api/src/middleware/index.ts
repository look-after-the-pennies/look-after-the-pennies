import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

const corsOptions: Record<string, any> = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default function (app: express.Application) {
	app.use(cors(corsOptions));
	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
}
