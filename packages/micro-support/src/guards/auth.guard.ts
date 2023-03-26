import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  Inject,
  HttpStatus,
} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Service } from "../dictionary";
import { firstValueFrom } from "rxjs";
import { ServiceResponse } from "../@types";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(Service.Auth) private readonly authClient: ClientProxy,
    @Inject(Service.Users) private readonly usersClient: ClientProxy
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      throw new HttpException("User must be logged", HttpStatus.UNAUTHORIZED);
    }

    const {
      status,
      message: userId,
      error,
    } = await firstValueFrom(
      this.authClient.send<ServiceResponse>("auth_token_decode", {
        token: request.headers.authorization.split(' ')[1],
      })
    );

    if (error) {
      throw new HttpException(error, status);
    }

    request.user = await firstValueFrom(
      this.usersClient.send("users_get", { id: userId })
    );
    return true;
  }
}
