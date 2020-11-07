import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
    imports: [TasksModule],
    controllers: [],
    providers: [],
})
export class AppModule {}

// main app module generated using cli command: nest new nestjs-task-management
