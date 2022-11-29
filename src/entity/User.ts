import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notifications } from './Notifications';

@Entity()
export class User extends BaseEntity  {
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
