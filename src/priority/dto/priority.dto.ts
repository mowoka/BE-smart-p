import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PriorityDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    priority: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'membuat janji mendesak harus di selesaikan hari ini' })
    description: string
}