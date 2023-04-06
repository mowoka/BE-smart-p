import { ApiProperty } from "@nestjs/swagger";
import { ApiResponseType } from "./api.response";

export class Token {
    @ApiProperty()
    token: string;
}

export class RegisterReponseTypes extends ApiResponseType {
    @ApiProperty({ type: Token })
    data: Token;
}
