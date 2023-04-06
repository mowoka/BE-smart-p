import { ApiProperty } from "@nestjs/swagger";
import { ApiResponseType } from "../../core/types/api.response";
import { Token } from "./token";


export class LoginReponseTypes extends ApiResponseType {
    @ApiProperty({ type: Token })
    data: Token;
}

