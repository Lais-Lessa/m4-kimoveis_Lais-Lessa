import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn,ManyToOne,OneToMany,} from "typeorm";
import Address from "./Address.entities";
import Category from "./Category.entities";
import Schedule from "./Schedule.entities";

@Entity("realEstates")
export default class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: "0.00" })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | String;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | String;

  @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
  schedules: Schedule[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "categoryId" })
  category: Category;
}
