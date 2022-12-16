import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './routers/auth';
import { notificationRouter } from './routers/notification';
import { handleError } from './middleware/errorHandle';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(cors());

app.use(helmet());

// ROUTER

app.use(authRouter);
app.use(notificationRouter);

const swaggerJsDocs = YAML.load('./docs/doc.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDocs));

app.use(handleError);

export { app };
