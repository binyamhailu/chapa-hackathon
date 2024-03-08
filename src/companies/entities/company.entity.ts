// company.entity.ts
import { Ownership } from 'src/ownsership/entities/ownsership.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  totalShares: number;

  @Column()
  avlShares: number;
  

  @Column()
  pricePerShare:number

  @OneToMany(() => Ownership, ownership => ownership.company)
  ownerships: Ownership[];
}
