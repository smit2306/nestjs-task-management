import {
    // request types
    Get,
    Post,
    Delete,
    Patch,
    // extracting params from request
    Body,
    Param,
    Query,
    // class decorator
    Controller,
    // validation pipes
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            // use tasks with filters service if filterDto has more than 0 keys present
            return this.tasksService.getTasksWithFilters(filterDto);
        } else {
            // use the get all tasks service if no keys are present in filterDto
            return this.tasksService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        // request body = {'title': 'some title', 'description': 'some desc'}

        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTask(
        @Param('id') id: string,
        @Body('status') status: TaskStatus,
    ): Task {
        return this.tasksService.updateTask(id, status);
    }
}

// tasks controller generated using cli command: nest g controller tasks --no-spec
