import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '0012002010020012' })
    nik: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'SudahBisa123!' })
    password: string;
}