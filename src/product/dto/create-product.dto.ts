import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ProductType } from "../../enums/product-type.enum";

export class CreateProductDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  authors: string[];

  @IsNumber({ allowNaN: false, maxDecimalPlaces: 2 })
  price: number;

  @IsEnum(ProductType)
  type: ProductType;

  @IsString()
  @IsOptional()
  fileUrl?: string;
}
