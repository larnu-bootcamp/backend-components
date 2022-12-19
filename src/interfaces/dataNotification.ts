import { EOrientation, EState } from '../enum/optionNotification';

export interface IStructureMessage {
  title: string;
  body: string;
  img: string;
  orientation: EOrientation;
  state: EState;
  time: Date;
  days: number[]
}

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
