import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import cron from 'node-cron';
import { sendMessage } from './sendNotification';
import { configurationNotification } from './configNotification';

export function sendNow(
  time: Date,
  title: string,
  body: string,
  orientation: string,
  img?: string
) {
  const message = configurationNotification(title, body, orientation, img);
  sendMessage(message);
}

export function sendProgrammer(
  time: Date,
  title: string,
  body: string,
  orientation: string,
  img?: string
) {
  const message = configurationNotification(title, body, orientation, img);

  const dayMonth: number | string = time.getDate() || '*';
  const dayWeek: number | string = time.getDate() || '*';
  const minute: number | string = time.getSeconds() || '*';
  const month: number | string = time.getMonth() || '*';
  const hour: number | string = time.getHours() || '*';
  cron.schedule(`${minute} ${hour} ${dayMonth} ${month} ${dayWeek}`, () => {
    sendMessage(message);
  });
}

export function sendRecurrent(
  time: Date,
  dayWeek: number[],
  title: string,
  body: string,
  orientation: string,
  img?: string
) {
  const message = configurationNotification(title, body, orientation, img);

  const dayMonth: number | string = time.getDate() || '*';
  const minute: number | string = time.getSeconds() || '*';
  const month: number | string = time.getMonth() || '*';
  const hour: number | string = time.getHours() || '*';
  
  cron.schedule(`${minute} ${hour} ${dayMonth} ${month} ${dayWeek}`, () => {
    sendMessage(message);
  });
}
