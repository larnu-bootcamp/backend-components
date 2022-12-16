import { NextFunction, Request, Response } from 'express';
import { db, dbAuth, dbCheck } from '..';
import { createError } from './errorHandle';

export async function isAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authenticate: any = req.headers['auth'];

    if (!authenticate)
      return next(new createError(403, 'usuario no autenticado'));

    const isAuth = await dbAuth.verifyIdToken(authenticate);

    if (!isAuth) return next(new createError(404, 'no esta autorizado'));

    const appCheakToken = req.header('X-Firebase-AppCheck');

    if (!appCheakToken)
      return next(new createError(401, 'no tiene autorizacion'));

    const appCheckClaim = await dbCheck.verifyToken(appCheakToken)  

  } catch (err: any) {
    next(new createError(0, err.message));
  }
}
