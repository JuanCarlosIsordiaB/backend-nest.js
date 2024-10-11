import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ // valida los dtos
      
      whitelist: true, // limpia la data que no corresponde al dto
      forbidNonWhitelisted: true, // si hay un campo que no es parte del dto, lo rechaza
      transform: true // 
    })
  )

  app.enableCors(); // habilita cors

  await app.listen(3000);
}
main();
