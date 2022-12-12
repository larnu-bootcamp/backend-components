import { Router } from 'express';
import {
  createNotifications,
  deleteNotifications,
  getNotifications,
  subscribeNotification,
  unsubscribeNotification,
  updateNotifications,
} from '../controllers/notification.controllers';
import { isAuthenticate } from '../middleware/token';

const notificationRouter = Router();

notificationRouter.get('/notifications', isAuthenticate, getNotifications);

notificationRouter.post('/notification', isAuthenticate, createNotifications);

notificationRouter.put(
  '/notification/:id',
  isAuthenticate,
  updateNotifications
);

notificationRouter.delete(
  '/notification/:id',
  isAuthenticate,
  deleteNotifications
);

notificationRouter.post(
  '/notification/subscribe',
  isAuthenticate,
  subscribeNotification
);

notificationRouter.post(
  '/notification/unsubscribe',
  isAuthenticate,
  unsubscribeNotification
);

export { notificationRouter };
