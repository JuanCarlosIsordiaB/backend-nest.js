import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 2,
            brand: 'Ford',
            model: 'Fiesta',
        },
        {
            id: 3,
            brand: 'Chevrolet',
            model: 'Spark',
        },
    ];

    findAll(){
        return this.cars;
    }

    findOne(id:number){
       const car =  this.cars.find(car => car.id === id);
       if(!car)  throw new NotFoundException(`Car with id ${id} not found`);
       return car;
    }


}
