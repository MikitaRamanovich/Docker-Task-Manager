import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  async findAll(): Promise<Task[]> {
    return Task.findAll();
  }

  async create(task: Task): Promise<Task> {
    return Task.create(task);
  }

  async update(id: number, updatedTask: Partial<Task>): Promise<Task> {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task.update(updatedTask);
  }

  async delete(id: number): Promise<void> {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task.destroy();
  }
}
