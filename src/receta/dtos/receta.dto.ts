<<<<<<< HEAD
import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { ListaCompra } from 'src/lista-compra/entities/lista-compra.entity';
import { Receta } from '../entities/receta.entity';
=======
import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';
>>>>>>> 3e5f65e439203cfc64d6b41a8274247bfcfe2455

export class RecetaDto {
  readonly nombre_receta: string;
  readonly tipo_receta: string;
  readonly tiempo_cocina: number;
  readonly pais: string;
  readonly instrucciones: string;

<<<<<<< HEAD
  @ApiProperty({ example: { id_lista_compra: 1 } })
  readonly ingredient: Ingredient[];
=======
  readonly ingrediente: Ingrediente[];
>>>>>>> 3e5f65e439203cfc64d6b41a8274247bfcfe2455
}
