import admin from 'firebase-admin';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

export async function sendMessage(message: any) {
  await admin
    .messaging()
    .send(message)
    .then(() => console.log(message))
    .then(() => console.log({ message: 'mensaje enviado correctamente' }))
    .catch(error => {
      console.log(error);
    });
}
