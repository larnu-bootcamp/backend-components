import { DataSource } from 'typeorm';
import { Notifications } from './entity/Notifications';
import { User } from './entity/User';
import dotenv from 'dotenv';

dotenv.config();

const environment = process.env;

export const db = new DataSource({
  type: 'postgres',
  host: environment.DB_HOST,
  port: Number(environment.DB_PORT),
  username: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: environment.DB_NAME,
  synchronize: true,
  entities: [User, Notifications],
  // entities: ['entity/*.js'],
});
