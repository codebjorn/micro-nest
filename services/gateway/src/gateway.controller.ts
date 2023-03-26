import { Controller, Get } from '@nestjs/common';

@Controller()
export class GatewayController {
  @Get()
  get() {
    return 'Hello World';
  }
}
