"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const dictionary_1 = require("../dictionary");
const rxjs_1 = require("rxjs");
let AuthGuard = class AuthGuard {
    constructor(authClient, usersClient) {
        this.authClient = authClient;
        this.usersClient = usersClient;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            throw new common_1.HttpException("User must be logged", common_1.HttpStatus.UNAUTHORIZED);
        }
        console.log(request.headers.authorization.split(' ')[1]);
        const { status, message: userId, error, } = await (0, rxjs_1.firstValueFrom)(this.authClient.send("auth_token_decode", {
            token: request.headers.authorization.split(' ')[1],
        }));
        if (error) {
            throw new common_1.HttpException(error, status);
        }
        request.user = await (0, rxjs_1.firstValueFrom)(this.usersClient.send("users_get", { id: userId }));
        return true;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(dictionary_1.Service.Auth)),
    __param(1, (0, common_1.Inject)(dictionary_1.Service.Users)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map