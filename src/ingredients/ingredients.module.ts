import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaCompra } from 'src/lista-compra/entities/lista-compra.entity';
import { AuthModule } from 'utilities/auth.module';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient]), AuthModule],
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule {}
