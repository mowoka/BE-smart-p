import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '000000xxxxx000xx' })
    nik: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'SudahBisa123!' })
    password: string;
}