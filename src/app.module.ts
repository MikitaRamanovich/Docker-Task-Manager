import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, ...databaseProviders],
})
export class AppModule {}
