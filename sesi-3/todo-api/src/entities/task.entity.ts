import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../types";

@Entity()
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ enum: TaskStatus })
    status: TaskStatus;
}
