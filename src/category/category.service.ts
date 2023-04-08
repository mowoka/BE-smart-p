import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }

    async getCategories() {
        try {
            const categories = await this.prisma.category.findMany({})

            return {
                statusCode: 200,
                message: 'Get Categories Successfull',
                status: true,
                data: categories,

            }

        } catch (err) {
            return {
                statusCode: 500,
                message: 'Internal Server Error',
                status: false,
                data: err,
            }
        }
    }
    async saveCategory(category: CategoryDto) {
        try {
            const newCategory = await this.prisma.category.create({
                data: {
                    name: category.name,
                    description: category.description,
                }
            })

            return {
                statusCode: 201,
                message: 'Category created',
                status: true,
                data: newCategory,
            }
        } catch (err) {
            return {
                statusCode: 500,
                message: 'Internal Server Error',
                status: false,
                data: err,
            }
        }
    }
}
