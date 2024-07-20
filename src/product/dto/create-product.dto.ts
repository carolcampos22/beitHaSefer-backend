import { IsArray, IsEnum, IsString } from "class-validator";
import { ProductType } from "../../enums/product-type.enum";

export class CreateProductDTO {
    @IsString()
    name: string

    @IsArray()
    authors: string[]

    @IsEnum(ProductType)
    type: number

    

}