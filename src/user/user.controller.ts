import { JwtGuard } from '@auth/guards';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { GetUser } from '@auth/decorator/get-user.decorator';
import { User } from '@prisma/client';
import { GetUserResponseType } from './types';

@ApiTags('Users')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private userServ: UserService) { }

    @Get('me')
    @ApiResponse({ status: 200, description: 'Get User Profile', type: GetUserResponseType })
    getMe(@GetUser() user: User) {
        return this.userServ.getUserProfile(user.nik);
    }
}
