import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Es un decorador 
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [ ],
})
export class AppModule {} // Es una simple clase
