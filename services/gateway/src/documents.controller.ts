import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Auth, Service, ServiceResponse } from 'micro-support';
import { firstValueFrom } from 'rxjs';

@Auth()
@Controller('documents')
export class DocumentsController {
  constructor(
    @Inject(Service.Documents) private readonly client: ClientProxy,
  ) {}

  @Get()
  async getAll() {
    const { message: documents } = await firstValueFrom(
      this.client.send<ServiceResponse>('documents_get_all', {}),
    );

    return documents;
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const { message: document } = await firstValueFrom(
      this.client.send<ServiceResponse>('documents_get', { id: parseInt(id) }),
    );

    return document;
  }
}
