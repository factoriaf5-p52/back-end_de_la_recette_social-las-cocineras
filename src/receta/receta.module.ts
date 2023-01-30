import { Module } from '@nestjs/common';
import { Receta } from './entities/receta.entity';
import { RecetaController } from './receta.controller';
import { RecetaService } from './receta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'utilities/auth.module';
import { UsersModule } from 'src/users/users.module';
// <import { ListaCompraModule } from 'src/lista_compra/lista_compra.module';>

@Module({
  imports: [TypeOrmModule.forFeature([Receta]), AuthModule, UsersModule],
  providers: [RecetaService],
  controllers: [RecetaController],
  exports:[RecetaService]
})
export class RecetaModule {}
