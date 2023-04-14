import { ApiResponseType } from "@core/types";
import { ApiProperty } from "@nestjs/swagger";
import { Priority } from "./priority";


export class PrioritiesResponseType extends ApiResponseType {
    @ApiProperty({ type: [Priority] })
    data: Priority[]
}