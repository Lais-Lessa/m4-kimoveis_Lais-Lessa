import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import RealEstate from './RealEstate.entities';

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45, unique: true, nullable: false })
  name: string;

  @OneToMany(() => RealEstate, (realEstates) => realEstates.category)
    realEstate: RealEstate[];
}

