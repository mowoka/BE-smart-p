import { Module } from '@nestjs/common';
import { PriorityService } from './priority.service';
import { PriorityController } from './priority.controller';

@Module({
  providers: [PriorityService],
  controllers: [PriorityController]
})
export class PriorityModule {}
