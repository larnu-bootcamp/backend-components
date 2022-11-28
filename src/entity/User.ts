import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notifications } from './Notifications';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  lastName!: string;
  @Column({ unique: true })
  email!: string;
  @Column()
  password!: string;
  @CreateDateColumn()
  createAt!: Date;
  @OneToMany(() => Notifications, notification => notification.user)
  notification!: Notifications;
}
