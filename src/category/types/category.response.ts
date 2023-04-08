import { ApiResponseType } from "@core/types";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "./category";

export class CategoryResponseType extends ApiResponseType {
    @ApiProperty({ type: Category })
    data: Category
}