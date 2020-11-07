import { Get, Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }
}

// tasks controller generated using cli command: nest g controller tasks --no-spec
