import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './User.entities';
import RealEstate from './RealEstate.entities';

@Entity('schedules')
export default class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: 'date', nullable: false })
  date: string;

  @Column({ type: 'time', nullable: false })
  hour: string;

  @ManyToOne(() => RealEstate, (realEstates) => realEstates.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (users) => users.schedule)
  user: User;
}

