// user.entity.ts
import { Company } from 'src/companies/entities/company.entity';
import { Ownership } from 'src/ownsership/entities/ownsership.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  pin: string;



  @OneToMany(() => Ownership, ownership => ownership.user)
  ownedShares: Ownership[];
}
