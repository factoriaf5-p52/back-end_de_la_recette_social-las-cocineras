import { Module } from '@nestjs/common';
import { ListaCompraService } from './lista-compra.service';
import { ListaCompraController } from './lista-compra.controller';
import { ListaCompra } from './entities/lista-compra.entity';
import { AuthModule } from 'utilities/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ListaCompra]), AuthModule],
  controllers: [ListaCompraController],
  providers: [ListaCompraService]
})
export class ListaCompraModule {}
