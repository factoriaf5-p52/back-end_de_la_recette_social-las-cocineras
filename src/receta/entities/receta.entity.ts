import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { ListaCompra } from 'src/lista-compra/entities/lista-compra.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';

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

  @ManyToOne(
    () => Ingredient,
    (ingredient: Ingredient) => ingredient.receta,
  )
  @JoinTable()
  ingredient: Ingredient[];


}
