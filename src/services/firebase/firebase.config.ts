// import { Message } from 'firebase-admin/lib/messaging/messaging-api';
// import { initializeApp } from 'firebase/app';
// import { getMessaging } from 'firebase/messaging';

// console.log(process.env);

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);
// const message = getMessaging();

import admin from 'firebase-admin';
import dotenv from 'dotenv';

const serviceAccount = require(`${__dirname}/${process.env.DIR_FIREBASE_KEY}`);

dotenv.config();

export async function connectFirebase() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
