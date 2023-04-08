import { JwtGuard } from '@auth/guards';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { BadRequestResponse, ErrorServerResponse } from '@core/types';
import { CategoriesResponseType, CategoryResponseType } from './types';

@ApiTags('Category')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
    constructor(private categoryServ: CategoryService) { }

    @Get()
    @ApiCreatedResponse({ status: 201, description: 'Get Categories Successfull', type: CategoriesResponseType })
    getCategory() {
        return this.categoryServ.getCategories();
    }

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'Create Category Successfull', type: CategoryResponseType })
    @ApiResponse({ status: 400, description: 'Bad Request', type: BadRequestResponse, schema: { example: { statusCode: 400, message: ['Something Error'], error: "Bad Request", } } })
    @ApiResponse({ status: 500, description: 'Internal Server Error', type: ErrorServerResponse, schema: { example: { statusCode: 500, message: 'Internal Server Error', status: false } } })
    saveCategory(@Body('') category: CategoryDto) {
        return this.categoryServ.saveCategory(category);
    }

}
