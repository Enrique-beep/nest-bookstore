import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigKeys } from './config.keys';

class TypeOrmConfig {
  static getOrmConfig(config: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: config.get(ConfigKeys.DB_HOST),
      port: +config.get(ConfigKeys.DB_PORT),
      username: config.get(ConfigKeys.DB_USER),
      password: config.get(ConfigKeys.DB_PASSWORD),
      database: config.get(ConfigKeys.DB_NAME),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService): Promise<TypeOrmModuleOptions> =>
    TypeOrmConfig.getOrmConfig(config),
};
