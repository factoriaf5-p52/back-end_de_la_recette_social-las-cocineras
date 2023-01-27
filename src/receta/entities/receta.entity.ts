<<<<<<< HEAD
import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { ListaCompra } from 'src/lista-compra/entities/lista-compra.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
=======
import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';
>>>>>>> 3e5f65e439203cfc64d6b41a8274247bfcfe2455

@Entity()
export class Receta {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id_receta: number;

  @ApiProperty({ example: 'pan' })
  @Column()
  nombre_receta: string;

  @ApiProperty({ example: 'postre' })
  @Column()
  tipo_receta: string;

  @ApiProperty({ example: 4 })
  @Column()
  valoracion: number;

  @ApiProperty({ example: 45 })
  @Column()
  tiempo_cocina: number;

  @ApiProperty({ example: 99 })
  @Column()
  num_visitas: number;

  @ApiProperty({ example: 99 })
  @Column()
  num_veces_compartido: number;

  @ApiProperty({ example: 'perú' })
  @Column()
  pais: string;

  @ApiProperty({ example: 'bueno' })
  @Column()
  comentarios: string;

  @ApiProperty({ example: 'instrucciones para pan' })
  @Column('text')
  instrucciones: string;

<<<<<<< HEAD
  @ManyToOne(
    () => Ingredient,
    (ingredient: Ingredient) => ingredient.receta,
  )
  @JoinTable()
  ingredient: Ingredient[];


=======
  // @ManyToOne(
  //   () => Ingrediente,
  //   (ingrediente: Ingrediente) => ingrediente.receta
  // )
  // @JoinTable()
  // ingrediente: Ingrediente[];
>>>>>>> 3e5f65e439203cfc64d6b41a8274247bfcfe2455
}
