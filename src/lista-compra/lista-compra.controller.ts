import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ListaCompraService } from './lista-compra.service';
import { CreateListaCompraDto } from './dto/create-lista-compra.dto';
import { UpdateListaCompraDto } from './dto/update-lista-compra.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('lista-compra')
@ApiTags('lista-compra') 
@UseGuards(AuthGuard('jwt')) 
@ApiBearerAuth('access-token')

export class ListaCompraController {
  constructor(private readonly listaCompraService: ListaCompraService) {}

  // @Post()
  // create(@Body() createListaCompraDto: CreateListaCompraDto) {
  //   return this.listaCompraService.create(createListaCompraDto);
  // }

  // @Get()
  // findAll() {
  //   return this.listaCompraService.findAll();
  // }

  // @Get(':id_lista_compra')
  // findOne(@Param('id_lista_compra') id_lista_compra: number) {
  //   return this.listaCompraService.findOne(id_lista_compra);
  // }

  // @Patch(':id_lista_compra')
  // update(
  //   @Param('id_lista_compra') id_lista_compra: number,
  //   @Body() updateListaCompraDto: UpdateListaCompraDto,
  // ) {
  //   return this.listaCompraService.update(
  //     id_lista_compra,
  //     updateListaCompraDto,
  //   );
  // }

  // @Delete(':id_lista_compra')
  // remove(@Param('id_lista_compra') id_lista_compra: number) {
  //   return this.listaCompraService.remove(id_lista_compra);
  // }
}
