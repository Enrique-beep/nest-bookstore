import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigKeys } from './config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule {
  static port: string;

  constructor(private config: ConfigService) {
    AppModule.port = config.get(ConfigKeys.APP_PORT);
  }
}
