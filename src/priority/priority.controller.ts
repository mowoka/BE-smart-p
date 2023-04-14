import { JwtGuard } from '@auth/guards';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PriorityService } from './priority.service';
import { PriorityDto } from './dto';
import { PrioritiesResponseType, PriorityResponseType } from './types';
import { BadRequestResponse, ErrorServerResponse } from '@core/types';

@ApiTags('Priority')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('priority')
export class PriorityController {
    constructor(private priorityServ: PriorityService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Get Priorities Successfull', type: PrioritiesResponseType })
    getPriorities() {
        return this.priorityServ.getPriorities();
    }

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'Create Priority Successfull', type: PriorityResponseType })
    @ApiResponse({ status: 400, description: 'Bad Request', type: BadRequestResponse, schema: { example: { statusCode: 400, message: ['Something Error'], error: "Bad Request", } } })
    @ApiResponse({ status: 500, description: 'Internal Server Error', type: ErrorServerResponse, schema: { example: { statusCode: 500, message: 'Internal Server Error', status: false } } })
    savePriority(@Body('') data: PriorityDto) {
        return this.priorityServ.savePriority(data);
    }
}
