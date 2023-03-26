import { Controller, Get, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UsersService) {}

  @MessagePattern('users_get_all')
  getAll() {
    return {
      status: HttpStatus.OK,
      message: this.service.getAll(),
    };
  }

  @MessagePattern('users_get')
  get({ id }: { id: number }) {
    console.log(id);
    return {
      status: HttpStatus.OK,
      message: this.service.get(id),
    };
  }
}
