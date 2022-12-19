// import { db } from '../..';
// import { listItem } from '../../utils/firebase/object';

// async function createNotificationProgrammer() {
//   const user = { uid: 'uidPrueba' };
//   const listRef = db.collection('user').doc(user.uid);

//   const listNotification: any = listRef
//     .collection('notification')
//     .get()
//     .then(listItem);

//   for (const notification in listNotification) {
//     if (Object.prototype.hasOwnProperty.call(listNotification, notification)) {
//       const element = listNotification[notification];
//     }
//     const {title, body, img} = element;
//   }
// }
