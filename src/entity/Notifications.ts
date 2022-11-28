import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';


@Entity()
export class Notifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ nullable: false })
  title!: string;
  @Column({ nullable: false })
  description!: string;
  @Column()
  img!: string;
  @Column({ default: 'androidAndIos' })
  orientation!: string;
  @Column({ default: 'complete' })
  state!: string;
  @CreateDateColumn()
  time!: Date;
  @CreateDateColumn()
  createAt!: Date;
  @ManyToOne(() => User, user => user.notification)
  user!: User;
}
