import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
    controllers: [TasksController],
})
export class TasksModule {}

// tasks module generated using cli command: nest g module tasks
