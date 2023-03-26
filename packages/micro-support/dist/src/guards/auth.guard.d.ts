import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
export declare class AuthGuard implements CanActivate {
    private readonly authClient;
    private readonly usersClient;
    constructor(authClient: ClientProxy, usersClient: ClientProxy);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
