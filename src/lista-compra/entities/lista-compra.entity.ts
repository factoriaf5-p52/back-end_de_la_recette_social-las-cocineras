import { ApiProperty } from '@nestjs/swagger';
import { Receta } from 'src/receta/entities/receta.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';

@Entity()
export class ListaCompra {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id_usuario: number;

  //   @ApiProperty({ example: 'harina' })
  //   @Column()
  //   nombre_ingrediente: string;

  //   @ApiProperty({ example: 4 })
  //   @Column()
  //   cantidad_ingrediente: number;

  //   @ApiProperty({ example: 'gr' })
  //   @Column()
  //   unidades_cantidad: string;

  //   @ApiProperty({ example: 2 })
  //   @Column()
  //   id_usuario: number;

  @ApiProperty({ example: 2 })
  @Column()
  id_receta: number;

  // @ManyToMany(() => Receta, (receta: Receta) => receta.listaCompra)
  // receta: Receta[];
}
