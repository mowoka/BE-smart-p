import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'SKTM' })
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Permohonan Surat Pengantar (Surat keterangan Tidak Mampu)' })
    description: string
}