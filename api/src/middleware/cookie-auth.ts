import { NextFunction, Response } from 'express';
import type { AuthRequest } from '../types/http';
// Declaring custom request interface
// We export this interface so that we can use it in other places in our project

module.exports = function cookieAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authToken = req.signedCookies['X-LATP-Auth-Token']
    ? req.signedCookies['X-LATP-Auth-Token']
    : null;

  req.authToken = authToken;

  next();
};
