import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid, v4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fiesta',
    },
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Spark',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar:Car = {...createCarDto, id: uuid()};
    this.cars.push(newCar);
    return {car: newCar};

  }


  update(id: string, updateCarDto: CreateCarDto) {
    const carUpdated = this.cars.find()
  }
}
