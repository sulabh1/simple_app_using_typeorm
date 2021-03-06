import { Entity, Column, BaseEntity } from "typeorm";
import Model from "./Model";
@Entity("users")
export class User extends Model {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column({ type: "uuid" })
  uuid: string;
}
