import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTask(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Patch(':id')
  async changeTask(
    @Param('id') id: number,
    @Body() updatedTask: Partial<Task>,
  ): Promise<Task> {
    return this.taskService.update(id, updatedTask);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<string> {
    await this.taskService.delete(id);
    return 'Task successfully deleted';
  }
}
