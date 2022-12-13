import { Message } from 'firebase-admin/lib/messaging/messaging-api';

export function configurationNotification(
  time: Date,
  title: string,
  body: string,
  orientation: string,
  image?: string
) {
  let config: Message = {
    notification: { title, body, imageUrl: image },
    webpush: { notification: { title, body, image } },
    android: { notification: { title, body, imageUrl } },
    apns: { payload:{aps:{}}},
  };

  const notification = {};
  const webpush = {};
  const android = {};
  const apns = {};

  if (image) {
    if (orientation) {
      config = {
        webpush: { notification: { title, body, image } },
      };
    } else if (orientation) {
      config = {
        android: { notification: { title, body, image } },
      };
    } else if (orientation) {
      config = {
        appnl: { notification: { title, body, image } },
      };
    } else {
      config = {
        webpush: { notification: { title, body, image } },
      };
    }
  } else {
    if (orientation) {
      config = {
        webpush: { notification: { title, body, image } },
      };
    } else if (orientation) {
      config = {
        webpush: { notification: { title, body, image } },
      };
    } else if (orientation) {
      config = {
        webpush: { notification: { title, body, image } },
      };
    } else {
      config = {
        webpush: { notification: { title, body, image } },
      };
    }
  }
}
