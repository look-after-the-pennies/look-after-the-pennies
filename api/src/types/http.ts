import { Request } from 'express';

// Declaring custom request interface
// We export this interface so that we can use it in other places in our project
export interface AuthRequest extends Request {
  authToken: string;
}
