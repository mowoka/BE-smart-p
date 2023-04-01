import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Gender, UserRole } from "../enum";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '000000xxxxx000xx' })
    nik: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'mawar' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '05' })
    rt: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '07' })
    rw: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 114 })
    no_rumah: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ enum: Gender })
    gender: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ example: 'johnDoe@example.com' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'SudahBisa123!' })
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ enum: UserRole })
    role: string;
}