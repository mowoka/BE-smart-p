import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getUserProfile(nik: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                nik
            }
        })

        if (!user) return {
            statusCode: 400,
            message: ['Error Get Profile'],
            error: "Bad Request",
        };

        delete user.password

        return {
            statusCode: 200,
            status: true,
            message: 'Successfull get profile',
            data: user
        }
    }
}
