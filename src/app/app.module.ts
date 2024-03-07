import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/payever_app'),
        UsersModule
    ],
})
export class AppModule {}