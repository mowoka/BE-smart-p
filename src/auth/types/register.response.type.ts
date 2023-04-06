import { ApiProperty } from "@nestjs/swagger";
import { ApiResponseType } from "@core/types";
import { Token } from "./token";


export class RegisterReponseTypes extends ApiResponseType {
    @ApiProperty({ type: Token })
    data: Token;
}

