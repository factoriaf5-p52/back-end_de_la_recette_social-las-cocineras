import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaService } from './receta/receta.service';
import { RecetaController } from './receta/receta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetaModule } from './receta/receta.module';
import { configService } from 'config/config.service';
import { UsersModule } from './users/users.module';
import { ListaCompraModule } from './lista-compra/lista-compra.module';
import { LoginController } from './auth/login.controller';
import { AuthService } from './auth/auth.service';
import { IngredientsModule } from './ingredients/ingredients.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    RecetaModule,
    UsersModule,
    ListaCompraModule,
    IngredientsModule,
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, AuthService],
})
export class AppModule {}
