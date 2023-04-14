import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { PriorityDto } from './dto';

@Injectable()
export class PriorityService {
    constructor(private prisma: PrismaService) { }

    async getPriorities() {
        try {
            const priorities = await this.prisma.priority.findMany({})

            return {
                statusCode: 200,
                message: 'Get Categories Successfull',
                status: true,
                data: priorities,
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

    async savePriority(data: PriorityDto) {
        try {
            const priority = await this.prisma.priority.create({
                data: {
                    priority: data.priority,
                    description: data.description,
                }
            })


            return {
                statusCode: 201,
                message: 'Priority created',
                status: true,
                data: priority,

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
