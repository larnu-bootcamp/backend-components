import { NextFunction, Request, Response } from 'express';
import { Notifications } from '../entity/Notifications';

/**
 * @param req
 * @param res
 * @param next
 */

export async function getNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { start, limit } = req.params;
    const notifications = await Notifications.find({
      skip: Number(start),
      take: Number(limit),
    });
    res.status(200).send(notifications);
  } catch (error) {
    next();
  }
}

enum EOrientation {
  android = 'android',
  IOS = 'IOS',
  androidAndIos = 'androidAndIos',
}

enum EState {
  programmed = 'programmed',
  complete = 'complete',
  recurrent = 'recurrent',
}

export async function createNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      title,
      description,
      img,
      orientation,
      state,
      time,
    }: {
      title: string;
      description: string;
      img: string;
      orientation: EOrientation;
      state: EState;
      time: Date;
    } = req.body;

    const newNotification = new Notifications();

    newNotification.title = title;
    newNotification.description = description;
    newNotification.img = img;
    newNotification.orientation = EOrientation[orientation];
    newNotification.state = EState[state];
    newNotification.time = time;

    await newNotification.save();

    res.status(200).send(newNotification);

  } catch (error) {
    console.log(error);
    next();
  }
}

export async function updateNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const notification = await Notifications.findOneBy({
      id: parseInt(id),
    });

    if (!notification)
      return res.status(404).send({ message: 'user not found' });

    await Notifications.update({ id: parseInt(id) }, req.body);

    return res.status(200).send(notification);
  } catch (error) {
    next();
  }
}

export async function deleteNotifications(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { id } = req.params;

    const deleteNotification = await Notifications.findOneBy({
      id: parseInt(id),
    });

    if (!deleteNotification) {
      return res.status(404).send({ message: 'user not found' });
    }

    await Notifications.delete({ id: parseInt(id) });

    return res.status(404).send({ message: 'user deleted' });
  } catch (error) {
    next();
  }
}
