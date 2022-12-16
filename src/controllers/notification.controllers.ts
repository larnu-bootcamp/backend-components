import { NextFunction, Request, Response } from 'express';
import { db, dbMessage } from '..';
import { createError } from '../middleware/errorHandle';
import { exist, listItem } from '../utils/firebase/object';
import { EOrientation, EState } from '../enum/optionNotification';
import { IStructureMessage } from '../interfaces/dataNotification';

export async function getNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const notificationRef = db
      .collection('user')
      .doc(`${req.headers['name']}`)
      .collection('notification');

    const listNotification = await notificationRef.get().then(listItem);

    if (!listNotification)
      return next(new createError(202, 'no hay notificación'));

    return res.status(200).send({ listNotification });
  } catch (error) {
    return next(new createError());
  }
}

export async function createNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { title, body, img, orientation, state, time }: IStructureMessage =
      req.body;

    if (!title)
      return next(new createError(404, 'el campo title es obligatorio'));

    if (!body)
      return next(new createError(404, 'el campo body es obligatorio'));

    let dataNotification;

    if (img) {
      dataNotification = {
        title,
        body,
        img,
        orientation: EOrientation[orientation || 'none'],
        state: EState[state || 'complete'],
        time: time || new Date(),
      };
    } else {
      dataNotification = {
        title,
        body,
        orientation: EOrientation[orientation || 'none'],
        state: EState[state || 'complete'],
        time: time || new Date(),
      };
    }

    const notificationRef = db
      .collection('user')
      .doc(`${req.headers['name']}`)
      .collection('notification')
      .doc();

    await notificationRef.set(dataNotification);

    res.status(200).json('notificación creada correctamente');
  } catch (error) {
    console.log(error);
    return next(new createError());
  }
}

export async function updateNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const notificationRef = db
      .collection('user')
      .doc(`${req.headers['name']}`)
      .collection('notification');

    const notificationExist = notificationRef
      .where('id', '==', req.params.id)
      .get()
      .then(exist);

    if (!notificationExist)
      return next(new createError(404, 'notificación no  existe'));

    await notificationRef.doc(req.params.id).update({ ...req.body });

    return res.status(200).json('notificación modificada');
  } catch (error) {
    return next(new createError());
  }
}

export async function deleteNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const notificationRef = db
      .collection('user')
      .doc(`${req.headers['name']}`)
      .collection('notification');

    const notificationExist = notificationRef
      .where('id', '==', req.params.id)
      .get()
      .then(exist);

    if (!notificationExist)
      return next(new createError(404, 'notificación no  existe'));

    await notificationRef.doc(req.params.id).delete();

    return res.status(404).send({ message: 'user deleted' });
  } catch (err: any) {
    next(new createError(0, err.message));
  }
}

export async function subscribeNotification(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { topic } = req.body;
    const token = req.header['name'];
    if (!topic) {
      return next(
        new createError(404, 'ingrese el tema al cual quiere subscribirse')
      );
    }

    if (!token) {
      return next(new createError(404, 'no tiene permisos para inscribirse'));
    }

    dbMessage.subscribeToTopic(token, topic);

    return res.status(400).json('subscripción exitosa');
  } catch (err: any) {
    next(new createError(0, err.message));
  }
}

export async function unsubscribeNotification(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { topic } = req.body;
    const token = req.header['name'];
    if (!topic) {
      return next(
        new createError(404, 'ingrese el tema al cual quiere subscribirse')
      );
    }

    if (!token) {
      return next(new createError(404, 'no tiene permisos para inscribirse'));
    }

    dbMessage.unsubscribeFromTopic(token, topic);

    return res.status(400).json('subscripción cancelada');
  } catch (err: any) {
    next(new createError(0, err.message));
  }
}
