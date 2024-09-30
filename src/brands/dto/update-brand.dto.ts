//import { PartialType } from '@nestjs/mapped-types';
//import { CreateBrandDto } from './create-brand.dto';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
//extiende lo que tenga en CreateBrandDto y lo hace opcional cada aspecto

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {
    

    @IsString()
    @MinLength(1)
    name: string;

}
