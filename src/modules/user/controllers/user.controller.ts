import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../services';

@Controller({
  path: 'users',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public getUser() {
    return this.userService.findAll();
  }

  @Get(':id')
  public getUsers(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  public createUser(dto: any) {
    return this.userService.create(dto);
  }

  @Patch(':id')
  public updateUser(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
