import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('la-recette');
  const options = new DocumentBuilder().setTitle('api receta with mysql').setDescription('apirest para receta en sql').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
