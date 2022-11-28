import { Router } from 'express';
import {
  createNotifications,
  deleteNotifications,
  getNotifications,
  updateNotifications,
} from '../controllers/notification.controllers';

const notificationRouter = Router();

notificationRouter.get('/notifications/:start/:limit', getNotifications);

notificationRouter.post('/notification', createNotifications);

notificationRouter.put('/notification/:id', updateNotifications);

notificationRouter.delete('/notification/:id', deleteNotifications);

export { notificationRouter };
