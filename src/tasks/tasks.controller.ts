import { Get, Post, Body, Controller } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
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
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        // request body = {'title': 'some title', 'description': 'some desc'}

        return this.tasksService.createTask(createTaskDto);
    }
}

// tasks controller generated using cli command: nest g controller tasks --no-spec
