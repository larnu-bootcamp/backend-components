import { EOrientation } from '../../enum/optionNotification';

export function configurationNotification(
  title: string,
  body: string,
  orientation: number,
  imageUrl?: string
) {
  let config = {};

  const notification = {
    title,
    body,
    imageUrl,
  };

  if (imageUrl) {
    if (EOrientation[orientation] === EOrientation[0]) {
      config = {
        webpush: { notification },
      };
    } else if (EOrientation[orientation] === EOrientation[1]) {
      config = {
        android: { notification },
      };
    } else if (EOrientation[orientation] === EOrientation[2]) {
      config: {
        apns: {
          payload: notification;
        }
      }
    } else {
      config = { notification };
    }
  } else {
    if (EOrientation[orientation] === EOrientation[0]) {
      config = {
        webpush: { notification: { title, body } },
      };
    } else if (EOrientation[orientation] === EOrientation[1]) {
      config = {
        android: { notification: { title, body } },
      };
    } else if (EOrientation[orientation] === EOrientation[2]) {
      config = {
        apns: { payload: { title, body } },
      };
    } else {
      config = {
        notification: { notification: { title, body } },
      };
    }
  }
  return config;
}
