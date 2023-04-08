import { ApiResponseType } from "@core/types";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "./category";

export class CategoriesResponseType extends ApiResponseType {
    @ApiProperty({ type: [Category] })
    data: Category[]
}