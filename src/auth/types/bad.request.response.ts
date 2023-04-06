import { ApiProperty } from "@nestjs/swagger";

export class BadRequestResponse {
    @ApiProperty({ example: 400 })
    statusCode: number;

    @ApiProperty({ example: ['Creadential Incorrect'] })
    message: string[];

    @ApiProperty({ example: 'Bad Request', required: false })
    error?: string;
}