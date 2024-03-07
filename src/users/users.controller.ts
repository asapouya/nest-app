import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller("/api/users")
export class UsersController {
    constructor (
        private usersSerivce: UsersService
    ) {}

    @Post()
    createUser(@Body() body: any) {
        return this.usersSerivce.createUser(body.username, body.email, body.password)
    }
}