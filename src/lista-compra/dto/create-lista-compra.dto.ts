import { ApiProperty } from '@nestjs/swagger';

export class CreateListaCompraDto {
  @ApiProperty({ example: 2 }) readonly id_receta: number;
}
