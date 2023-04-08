import { ApiProperty } from "@nestjs/swagger";

export class Category {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    uptatedAt: Date;
}