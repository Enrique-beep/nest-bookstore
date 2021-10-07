import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fromRepositories from './repositories';
import * as fromControllers from './controllers';
import * as fromServices from './services';

@Module({
  imports: [TypeOrmModule.forFeature([...fromRepositories.repositories])],
  controllers: [...fromControllers.controllers],
  providers: [...fromServices.services],
})
export class UserModule {}
