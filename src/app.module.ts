import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { PriorityModule } from './priority/priority.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    CoreModule,
    UserModule,
    CategoryModule,
    PriorityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
