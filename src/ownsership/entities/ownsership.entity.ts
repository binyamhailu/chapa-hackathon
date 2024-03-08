// ownership.entity.ts
import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ownership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sharesOwned: number;

  @ManyToOne(() => User, user => user.ownedShares)
  user: User;

  @ManyToOne(() => Company, company => company.ownerships)
  company: Company;
}
