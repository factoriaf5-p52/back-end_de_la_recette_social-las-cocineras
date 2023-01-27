import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
<<<<<<< HEAD
    @ApiProperty({example:'1'})
    readonly id_usuario: number;
=======
  @ApiProperty({ example: '1' })
  readonly id_usuario: number;

  @ApiProperty({ example: 'Maria pi' })
  readonly nombre_usuario: string;
>>>>>>> 3e5f65e439203cfc64d6b41a8274247bfcfe2455

  @ApiProperty({ example: '1234' })
  readonly contraseña_registro: string;

<<<<<<< HEAD
    @ApiProperty({example:'1234'})
    readonly contraseña_registro:string;


    @ApiProperty({example:'1'})
        readonly id_registro: number;

    @ApiProperty({example:'2'})
    readonly insignias: number;
=======
  @ApiProperty({ example: '1' })
  readonly id_registro: number;
>>>>>>> 3e5f65e439203cfc64d6b41a8274247bfcfe2455

  @ApiProperty({ example: '2' })
  readonly insignias: number;
}
