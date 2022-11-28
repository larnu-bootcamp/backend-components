import admin from 'firebase-admin';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';
// import { Message } from 'firebase-admin/lib/messaging/messaging-api';

import { getMessaging } from "firebase/messaging";

// // estructura

// /**
//  * const message ={
//  * Notification:{
//  *  title,body,imageUrl // string
//  *  }
//  * }
//  */

// interface INotification {
//   title: string;
//   body: string;
//   imageUrl: string;
// }

// function sendPushToTopic(notification: Message) {
//   const message: Message = {
//     notification: {
//       title: notification.title,
//       body: notification.body,
//       imageUrl: notification.imageUrl,
//     },
//     token:tokenId
//   };
//   sendMessage(message);
// }



// Define a condition which will send to devices which are subscribed
// to either the Google stock or the tech industry topics.
const condition = '\'stock-GOOG\' in topics || \'industry-tech\' in topics';

// See documentation on defining a message payload.
const message = {
  notification: {
    title: '$FooCorp up 1.43% on the day',
    body: '$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
  },
  condition: condition
};



export function sendMessage(message:Message) {
  admin
    .messaging()
    .send(message)
    .then(() => console.log({ message: 'mensaje enviado correctamente' }))
    .catch(error => console.log(error));
}

sendMessage(message);

