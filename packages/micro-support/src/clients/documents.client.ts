import { ClientProxyFactory } from "@nestjs/microservices";
import { Service } from "../dictionary/service.dictionary";

export const DocumentsClient = {
  provide: Service.Documents,
  useFactory: () => {
    return ClientProxyFactory.create({
      options: {
        port: process.env.DOCUMENTS_SERVICE_PORT,
        host: process.env.DOCUMENTS_SERVICE_HOST,
      },
    });
  },
};
