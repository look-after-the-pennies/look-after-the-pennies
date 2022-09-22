import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import dotEnv from '../config/dotenv';
const cookieParser = require('cookie-parser');
// TODO: Work out why cookie middleware won't work
// const cookieAuth = require('./cookie-auth');

const corsOptions: Record<string, any> = {
  origin: 'http://localhost:9000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

export default function (app: express.Application) {
  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(cookieParser(dotEnv.COOKIE_SECRET));
  // app.use(cookieAuth());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}
