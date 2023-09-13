import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn,OneToMany,} from "typeorm";
import Schedule from "./Schedule.entities";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column()
  password: string;

  @CreateDateColumn({type: "date"})
  createdAt: Date | String;

  @UpdateDateColumn({type: "date"})
  updatedAt: Date | String;

  @DeleteDateColumn({type: "date", nullable: true})
  deletedAt: Date | String;
  
  @OneToMany(() => Schedule, (schedules) => schedules.user)
  schedule: Schedule[];
}
