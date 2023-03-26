"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsClient = void 0;
const microservices_1 = require("@nestjs/microservices");
const service_dictionary_1 = require("../dictionary/service.dictionary");
exports.DocumentsClient = {
    provide: service_dictionary_1.Service.Documents,
    useFactory: () => {
        return microservices_1.ClientProxyFactory.create({
            options: {
                port: process.env.DOCUMENTS_SERVICE_PORT,
                host: process.env.DOCUMENTS_SERVICE_HOST,
            },
        });
    },
};
//# sourceMappingURL=documents.client.js.map