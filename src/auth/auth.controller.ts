import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { RegisterReponseTypes } from './types';
import { LoginReponseTypes } from './types/login.response.type';
import { BadRequestResponse, ErrorServerResponse } from '@core/types';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @ApiCreatedResponse({ status: 201, description: 'Login Successfull', type: LoginReponseTypes })
    @ApiResponse({ status: 400, description: 'Bad Request', type: BadRequestResponse, schema: { example: { statusCode: 400, message: ['Credential Incorrect'], error: "Bad Request", } } })
    @ApiResponse({ status: 500, description: 'Internal Server Error', type: ErrorServerResponse, schema: { example: { statusCode: 500, message: 'Internal Server Error', status: false } } })
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @Post('register')
    @ApiCreatedResponse({ status: 201, description: 'Create user Successfull', type: RegisterReponseTypes })
    @ApiResponse({ status: 400, description: 'Bad Request', type: BadRequestResponse, schema: { example: { statusCode: 400, message: ['User Already Exists'], error: "Bad Request", } } })
    @ApiResponse({ status: 500, description: 'Internal Server Error', type: ErrorServerResponse, schema: { example: { statusCode: 500, message: 'Internal Server Error', status: false } } })
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }
}
