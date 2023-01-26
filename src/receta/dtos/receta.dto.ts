import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { ListaCompra } from 'src/lista-compra/entities/lista-compra.entity';
import { Receta } from '../entities/receta.entity';

export class RecetaDto {
  readonly nombre_receta: string;
  readonly tipo_receta: string;
  readonly tiempo_cocina: number;
  readonly pais: string;
  readonly instrucciones: string;

  @ApiProperty({ example: { id_lista_compra: 1 } })
  readonly ingredient: Ingredient[];
}
