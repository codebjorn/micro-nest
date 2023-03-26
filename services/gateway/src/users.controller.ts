import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Auth, Service, ServiceResponse } from 'micro-support';
import { firstValueFrom } from 'rxjs';

@Auth()
@Controller('users')
export class UsersController {
  constructor(@Inject(Service.Users) private readonly client: ClientProxy) {}

  @Get()
  async getAll() {
    const { message: users } = await firstValueFrom(
      this.client.send<ServiceResponse>('users_get_all', {}),
    );

    return users;
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const { message: user } = await firstValueFrom(
      this.client.send<ServiceResponse>('users_get', { id: parseInt(id) }),
    );

    return user;
  }
}
