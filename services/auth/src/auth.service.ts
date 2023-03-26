import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  decodeToken(token: string): number | boolean {
    if (token === 'this-is-token') {
      return 1;
    }

    return false;
  }
}
