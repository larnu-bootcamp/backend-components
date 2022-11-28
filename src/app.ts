import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './routers/auth';
import { notificationRouter } from './routers/notification';

const app = express();

app.use(express.json());

app.use(morgan('tiny'));
app.use(cors());

app.use(helmet());

app.use(authRouter);
app.use(notificationRouter);

export { app };
