import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
	controllers: [UsersController],
	providers: [UsersService],
})
export class AppModule {}
