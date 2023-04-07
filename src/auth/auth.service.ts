import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) { }

    async login(dto: LoginDto) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    nik: dto.nik
                }
            })

            if (!user) {
                return {
                    statusCode: 400,
                    message: ['Credential Incorrect'],
                    error: "Bad Request",
                };
            }

            const passwordMatch = await argon.verify(user.password, dto.password);
            if (!passwordMatch) {
                return {
                    statusCode: 400,
                    message: ['Credential Incorrect'],
                    error: "Bad Request",
                };
            }

            const token = await this.generateToken(user.id, user.nik, user.email);

            return {
                statusCode: 201,
                message: 'Login success',
                status: true,
                data: token,
            }

        } catch (e) {
            return {
                statusCode: 500,
                message: 'Internal Server Error',
                status: false,
                data: e,
            };
        }
    }

    async register(dto: RegisterDto) {
        const hashPassword = await argon.hash(dto.password);
        try {
            const findUser = await this.prisma.user.findUnique({
                where: {
                    nik: dto.nik,
                }
            });

            if (findUser) {
                return {
                    statusCode: 400,
                    message: ['User Already exists'],
                    error: "Bad Request",
                };
            }

            const user = await this.prisma.user.create({
                data: {
                    nik: dto.nik,
                    name: dto.name,
                    rt: dto.rt,
                    rw: dto.rw,
                    no_rumah: dto.no_rumah,
                    gender: dto.gender,
                    email: dto.email,
                    password: hashPassword,
                    role: dto.role,
                }
            });

            const token = await this.generateToken(user.id, user.nik, user.email);

            delete user.password;

            return {
                statusCode: 201,
                message: 'Create user Successfull',
                status: true,
                data: {
                    token
                }
            }

        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    return {
                        statusCode: 400,
                        message: ['Credential Incorrect'],
                        error: "Bad Request",
                    };
                }
            }
            return {
                statusCode: 500,
                message: 'Internal Server Error',
                status: false,
                data: e,
            };
        }
    }

    async generateToken(userId: number, nik: string, email: string) {
        const payload = {
            sub: userId,
            nik,
            email
        }

        const secret = await this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            secret
        });

        return token;
    }
}
