export function configurationNotification(
  title: string,
  body: string,
  orientation: string,
  imageUrl?: string
) {
  let config = {};

  const notification = {
    title,
    body,
    imageUrl,
  };

  if (imageUrl) {
    if (orientation) {
      config = {
        webpush: { notification },
      };
    } else if (orientation) {
      config = {
        android: { notification },
      };
    } else if (orientation) {
      config: {
        apns: {
          payload: notification;
        }
      }
    } else {
      config = { notification };
    }
  } else {
    if (orientation) {
      config = {
        webpush: { notification: { title, body } },
      };
    } else if (orientation) {
      config = {
        android: { notification: { title, body } },
      };
    } else if (orientation) {
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
