import { ApiProperty } from "@nestjs/swagger";

export class Priority {
    @ApiProperty()
    id: number;

    @ApiProperty()
    priority: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}