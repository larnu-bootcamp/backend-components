import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { createError } from '../middleware/errorHandle';
import { db, dbAuth, dbCheck } from '..';
import { IUser } from '../interfaces/dataNotification';

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, lastName, email, password }: IUser = req.body;

    if (!name || !lastName || !email || !password)
      return next(new createError(404, 'faltan datos'));

    if (!email.includes('@') || !email.includes('.'))
      return next(new createError(404, 'correo no valido'));

    if (password.length < 5)
      return next(new createError(404, 'la contraseña no es valida'));

    // const salt: string = await bcrypt.genSalt(10);
    const newPassword: string = await bcrypt.hash(password, 10);

    const information = {
      displayName: `${name} ${lastName}`,
      email,
      password: newPassword,
    };

    const newUser = await dbAuth.createUser(information);

    const newUserTable = db.collection('user').doc(newUser.uid);

    await newUserTable.set(information);

    return res.status(200).json('usuario creado');
  } catch (err: any) {
    console.log(err.message);
    next(new createError(404, err.message));
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const userExist = await dbAuth.getUserByEmail(email);

    if (!userExist) return next(new createError(404, 'usuario no encontrado'));

    const user = (await db.collection('user').doc(userExist.uid).get()).data();

    if (!user) return next(new createError(404, 'usuario no encontrado'));

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect)
      return next(new createError(400, 'correo o contraseña no es correcta'));

    console.log(userExist.uid);

    // const token = await dbAuth.createCustomToken(userExist.uid);

    const token = await dbCheck.createToken(userExist.uid);

    console.log(token);

    return res
      .status(200)
      .header({ user: userExist.uid })
      .json(`bienvenido ${userExist.displayName}`);
  } catch (err: any) {
    next(new createError(404, err.message));
  }
}
