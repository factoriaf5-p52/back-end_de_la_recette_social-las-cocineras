import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id_receta: number;

  @Column()
  valoracion: number;

  @Column()
  tiempo_cocina: number;

  @Column()
  num_veces_compartido: number;

  @Column()
  pais: string;

  @Column()
  comentarios: string;

  @Column('text')
  instrucciones: string;

  @Column()
  tipo_cocina: number;

  @Column()
  nombre_receta: string;

  @Column()
  authorId:number;



@ManyToOne(()=>User, user => user.recetas)
author:User

  // @ManyToOne(
  //   () => Ingrediente,
  //   (ingrediente: Ingrediente) => ingrediente.receta
  // )
  // @JoinTable()
  // ingrediente: Ingrediente[];
}
