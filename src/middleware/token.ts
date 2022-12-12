import { NextFunction, Request, Response } from 'express';
import { dbAuth } from '..';
import { createError } from './errorHandle';

export async function isAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authenticate: any = req.headers['auth'];

    if (!authenticate) next(new createError(403, 'usuario no autenticado'));

    const isAuth = await dbAuth.verifyIdToken(authenticate);

    if (!isAuth) return next(new createError(404, 'no esta autorizado'));
  } catch (err: any) {
    next(new createError(0, err.message));
  }
}
