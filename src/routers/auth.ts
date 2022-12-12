import { Router } from 'express';
import { login, register } from '../controllers/auth.controllers';

const authRouter = Router();

authRouter.post('/auth/register', register);
authRouter.post('/auth/login', login);

export { authRouter };
