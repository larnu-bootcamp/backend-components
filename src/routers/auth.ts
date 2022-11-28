import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login');
authRouter.post('/register');
authRouter.post('/recuperation');

export { authRouter };
