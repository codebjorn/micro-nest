"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersClient = void 0;
const microservices_1 = require("@nestjs/microservices");
const service_dictionary_1 = require("../dictionary/service.dictionary");
exports.UsersClient = {
    provide: service_dictionary_1.Service.Users,
    useFactory: () => {
        return microservices_1.ClientProxyFactory.create({
            options: {
                port: process.env.USERS_SERVICE_PORT,
                host: process.env.USERS_SERVICE_HOST,
            },
        });
    },
};
//# sourceMappingURL=users.client.js.map