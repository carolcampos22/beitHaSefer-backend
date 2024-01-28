import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minNumbers: 1,
        minLowercase: 0,
        minSymbols: 0,
        minUppercase: 0
    })
    password: string;

    @IsString()
    phone: string;
}