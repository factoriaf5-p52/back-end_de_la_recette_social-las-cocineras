import { Receta } from 'src/receta/entities/receta.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id_ingrediente: number;

  @Column()
  nombre: string;

  @OneToMany(() => Receta, (receta: Receta) => receta.ingredient)
  @JoinTable()
  receta: Receta[];
}
