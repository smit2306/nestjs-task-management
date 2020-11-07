import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: any[] = [];

    getAllTasks(): any[] {
        this.tasks.push('all tasks will be pushed to this array');
        return this.tasks;
    }
}
