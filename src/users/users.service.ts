import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User } from "./users.entity";

@Injectable()
export class UsersService {

    constructor(
        @InjectConnection() private readonly connection: Connection,
        @InjectModel(User.name) private readonly User: Model<User>
    ) {}

    async createUser(username: String, email: String, password: String): Promise<any> {

        const user = new this.User({ username, email, password });
        return user.save()
    }
}