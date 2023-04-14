import { ApiResponseType } from "@core/types";
import { Priority } from "./priority";
import { ApiProperty } from "@nestjs/swagger";

export class PriorityResponseType extends ApiResponseType {
    @ApiProperty({ type: Priority })
    data: Priority
}