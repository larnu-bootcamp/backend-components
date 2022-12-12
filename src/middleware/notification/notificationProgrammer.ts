import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import cron from 'node-cron';
import { sendMessage } from './sendNotification';

export function sendNow(
  time: Date,
  title: string,
  body: string,
  orientation: string,
  img?: string
) {
  let message;
  if (img) {
    message = {
      notification: {
        title,
        body,
        imageUrl: img,
      },
    };
  } else {
    message = {
      notification: {
        title,
        body,
      },
    };
  }

  sendMessage(message);
}

export function sendProgrammer(
  time: Date,
  title: string,
  description: string,
  orientation: string,
  img?: string
) {
  console.log('se enviaron la notificaciones');
  const message = {
    notification: {
      title,
      body: description,
    },
  };
  const dayMonth: number | string = time.getDate() || '*';
  const dayWeek: number | string = time.getDate() || '*';
  const minute: number | string = time.getSeconds() || '*';
  const month: number | string = time.getMonth() || '*';
  const hour: number | string = time.getHours() || '*';
  cron.schedule(`${minute} ${hour} ${dayMonth} ${month} ${dayWeek}`, () => {
    const message = {};
    sendMessage(message);
  });
}

export function sendRecurrent(
  time: Date,
  title: string,
  description: string,
  orientation: string,
  img?: string
) {
  console.log('se enviaron la notificaciones');
  const message: Message = {
    condition: '',
    token: '',
    topic: '',
    android: {
      collapseKey: '',
      data: {},
      fcmOptions: { analyticsLabel: '' },
      notification: {
        body: '',
        bodyLocArgs: [''],
        bodyLocKey: '',
        imageUrl: '.... hay mas configuraciones',
      },
      priority: 'high',
      ttl: 1000,
      restrictedPackageName: '',
    },
    apns: { fcmOptions: { imageUrl: '' } },
    data: {},
    fcmOptions: { analyticsLabel: '' },
    notification: { body: '', title, imageUrl: '' },
    webpush: { data: {}, notification: {}, fcmOptions: {} },
  };
  const dayMonth: number | string = time.getDate() || '*';
  const dayWeek: number | string = time.getDate() || '*';
  const minute: number | string = time.getSeconds() || '*';
  const month: number | string = time.getMonth() || '*';
  const hour: number | string = time.getHours() || '*';
  cron.schedule(`${minute} ${hour} ${dayMonth} ${month} ${dayWeek}`, () => {
    const message = {};
    sendMessage(message);
  });
}
