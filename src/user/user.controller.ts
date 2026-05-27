import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUsers() {
        return 'All users';
    }
    @Get(':id')
    getUser(@Param('id') id: string) {
        return `User ${id}`;
    }
    @Post()
    createUser(@Body() body: any) {
        return `User created ${JSON.stringify(body)}`;
    }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() body: any) {
        return `User updated ${id} ${JSON.stringify(body)}`;
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return `User deleted ${id}`;
    }
}
