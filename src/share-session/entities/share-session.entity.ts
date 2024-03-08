import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShareSession {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    company_id: number;

    @Column()
    user_id: number;

    @Column()
    share_no: number;

    @Column()
    share_value: number;

    @Column()
    status: string;
    @Column()
    ref_id: string
}
