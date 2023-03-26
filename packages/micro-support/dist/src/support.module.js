"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportModule = void 0;
const common_1 = require("@nestjs/common");
const clients_1 = require("./clients");
const auth_guard_1 = require("./guards/auth.guard");
let SupportModule = class SupportModule {
};
SupportModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        exports: [clients_1.AuthClient, clients_1.DocumentsClient, clients_1.UsersClient, auth_guard_1.AuthGuard],
        providers: [clients_1.AuthClient, clients_1.DocumentsClient, clients_1.UsersClient, auth_guard_1.AuthGuard],
    })
], SupportModule);
exports.SupportModule = SupportModule;
//# sourceMappingURL=support.module.js.map