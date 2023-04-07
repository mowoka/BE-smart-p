import { ApiResponseType } from "@core/types";
import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nik: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    rt: string;

    @ApiProperty()
    rw: string;

    @ApiProperty()
    no_rumah: number;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class GetUserResponseType extends ApiResponseType {
    @ApiProperty()
    data: User;
}