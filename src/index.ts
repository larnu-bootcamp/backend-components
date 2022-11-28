import 'reflect-metadata';
import { app } from './app';
import { db } from './data-source';
import { connectFirebase } from './services/firebase/firebase.config';

const port: number = Number(process.env.CONNECT_PORT);

// async function connect() {
//   try {
//     await db.initialize();
//     app.listen(port);
//     console.log('--------------------------------');
//     console.log(`|   connect in port ${port} [✔]   |`);
//     console.log('--------------------------------');
//   } catch (error) {
//     console.error('---------------------------');
//     console.error(error);
//     console.error('---------------------------');
//   }
// }

// connect();

db.initialize()
  .then(() => app.listen(port))
  .then(() => connectFirebase())
  .then(() => {
    console.log('--------------------------------');
    console.log(`|   connect in port ${port} [✔]   |`);
    console.log('--------------------------------');
  })
  .catch(error => {
    console.log('--------------------------------');
    console.error(error);
    console.error('---------------------------');
  });
