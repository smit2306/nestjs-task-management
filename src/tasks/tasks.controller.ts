import { Get, Post, Body, Controller } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task {
        // request body = {'title': 'some title', 'description': 'some desc'}

        return this.tasksService.createTask(title, description);
    }
}

// tasks controller generated using cli command: nest g controller tasks --no-spec
