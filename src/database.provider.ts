import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Task } from './task/task.entity';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
      });
      sequelize.addModels([Task]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
