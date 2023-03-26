import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @MessagePattern('auth_token_decode')
  token({ token }: { token: string }) {
    console.log(token);
    const userId = this.service.decodeToken(token);

    if (!userId) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: {},
        error: 'Unable to decode the user',
      };
    }

    return {
      status: HttpStatus.OK,
      message: this.service.decodeToken(token),
    };
  }
}
