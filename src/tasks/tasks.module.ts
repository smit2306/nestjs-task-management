import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule {}

// tasks module generated using cli command: nest g module tasks
