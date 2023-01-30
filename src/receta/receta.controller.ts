import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RecetaService } from './receta.service';
import { Request } from 'express';

import { Receta } from './entities/receta.entity';
import { AuthGuard } from '@nestjs/passport';
import { CretareRecetaDto } from './dtos/create-receta.dto';
import { UpdateRecetaDto } from './dtos/update-receta.dto';

@Controller('receta')
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @Post()
  createrReceta(@Body() newReceta:CretareRecetaDto){
      return this.recetaService.createReceta(newReceta);
  }

  @Get()
  getRecetas(){
    return this.recetaService.getRecetas()
  }

  @Get(':id_receta')
  getUser(@Param('id_receta', ParseIntPipe) id_receta: number) {
    return this.recetaService.getUser(id_receta);
  }

  @Put(':id_receta')
    updateUser(@Param('id_receta', ParseIntPipe) id_receta:number, @Body() receta:UpdateRecetaDto){
        return this.recetaService.updateUser(id_receta,receta)
    }

}

//   @Get()
//   findAll(): Promise<Receta[]> {
//     return this.recetaService.findAll();
//   }

//   @Get(':recetaId')
//   findReceta(@Param('recetaId') recetaId: number): Promise<Receta> {
//     return this.recetaService.findReceta(recetaId);
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Post()
//   createReceta(@Body() newReceta: CretareRecetaDto): Promise<Receta> {
//     return this.recetaService.createReceta(newReceta);
//   }

//   @Delete(':recetaId')
//   deleteReceta(@Param('recetaId') recetaId: string){
//     return this.recetaService.deleteReceta(+recetaId);
//   }

//   @Put(':recetaId')
//   updateReceta(
//     @Param{('recetaId') recetaId: number,
//     @Body() newReceta: CretareRecetaDto,
//   ): Promise<Receta> {
//     return this.recetaService.updateReceta(recetaId, newReceta);
//   }
// }
