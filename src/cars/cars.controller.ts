import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
//@UsePipes(ValidationPipe) //valida los dtos
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  //Read
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarsById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Post() //Crea
  //valida DTOS
  createCar(@Body() createCardDto: CreateCarDto) {
    return this.carsService.create(createCardDto);
  }
  @Patch(':id') // Actualiza
  //valida DTOS
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return `Car with id ${updateCarDto} updated`;
  }

  @Delete(':id') // Elimina
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return `Car with id ${id} deleted`;
  }
}
