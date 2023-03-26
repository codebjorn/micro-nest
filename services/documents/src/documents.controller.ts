import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly service: DocumentsService) {}

  @MessagePattern('documents_get_all')
  getAll() {
    console.log('Called message documents_get_all');

    return {
      status: HttpStatus.OK,
      message: this.service.getAll(),
    };
  }

  @MessagePattern('documents_get')
  get({ id }: { id: number }) {
    return {
      status: HttpStatus.OK,
      message: this.service.get(id),
    };
  }
}
