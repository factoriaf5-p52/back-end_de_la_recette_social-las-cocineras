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
  nombre_ingrediente: string;

  @Column()
  unidades_cantidad: string;

  @OneToMany(() => Receta, (receta: Receta) => receta.ingrediente)
  @JoinTable()
  receta: Receta[];
}
