"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClient = void 0;
const microservices_1 = require("@nestjs/microservices");
const service_dictionary_1 = require("../dictionary/service.dictionary");
exports.AuthClient = {
    provide: service_dictionary_1.Service.Auth,
    useFactory: () => {
        return microservices_1.ClientProxyFactory.create({
            options: {
                port: process.env.AUTH_SERVICE_PORT,
                host: process.env.AUTH_SERVICE_HOST,
            },
        });
    },
};
//# sourceMappingURL=auth.client.js.map