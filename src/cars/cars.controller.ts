import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {


    constructor(
        private readonly carsService: CarsService
    ){}
    //Read
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    
    @Get(':id')
    getCarsById( @Param('id', ParseIntPipe) id: number ){    
        return this.carsService.findOne(id); ;
    }


    @Post() //Crea
    createCar( @Body() body: any ){
        
    }
    @Patch(':id') // Actualiza
    updateCar( @Param('id', ParseIntPipe) id:number,  @Body() body: any ){
        return `Car with id ${body.id} updated`;
    }

    @Delete(':id') // Elimina
    deleteCar( @Param('id', ParseIntPipe) id: number ){
        return `Car with id ${id} deleted`;
    }
    
    
}
