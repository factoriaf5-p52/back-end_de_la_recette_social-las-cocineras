import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListaCompraDto } from './dto/create-lista-compra.dto';
import { UpdateListaCompraDto } from './dto/update-lista-compra.dto';
import { ListaCompra } from './entities/lista-compra.entity';

@Injectable()
export class ListaCompraService {
  constructor(
    @InjectRepository(ListaCompra) private listaCompraRepository: Repository<ListaCompra>,
  ) {}

  create(createListaCompraDto: CreateListaCompraDto): Promise<ListaCompra> {
    return this.listaCompraRepository.save(createListaCompraDto);
  }

  async findAll(): Promise<ListaCompra[]> {
    return this.listaCompraRepository.find({ relations: ['receta'] });
  }

  // async findOne(id_lista_compra: number): Promise<ListaCompra> {
  //   return this.listaCompraRepository.findOne({
  //     where: { id_lista_compra },
  //     relations: ['receta'],
  //   });
  // }

  async update(
    id_lista_compra: number,
    updateListaCompraDto: UpdateListaCompraDto,
  ) {
    return this.listaCompraRepository.update(
      id_lista_compra,
      updateListaCompraDto,
    );
  }

  // async remove(id_lista_compra: number) {
  //   return this.listaCompraRepository.delete({ id_lista_compra });
  // }
}
