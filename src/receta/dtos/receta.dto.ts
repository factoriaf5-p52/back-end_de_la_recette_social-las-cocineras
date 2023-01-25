import { ApiProperty } from '@nestjs/swagger';
import { ListaCompra } from 'src/lista-compra/entities/lista-compra.entity';
import { Receta } from '../entities/receta.entity';

export class RecetaDto {
  readonly nombre: string;
  readonly tipo: string;
  readonly tiempo_cocina_min: number;
  readonly pais: string;
  readonly instrucciones: string;

  @ApiProperty({ example: { id_lista_compra: 1 } })
  readonly listaCompra: ListaCompra;

  @ApiProperty({ example: [{ id_receta: 1 }] }) readonly receta: Receta[];
}
