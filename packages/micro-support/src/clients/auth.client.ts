import { ClientProxyFactory } from "@nestjs/microservices";
import { Service } from "../dictionary/service.dictionary";

export const AuthClient = {
  provide: Service.Auth,
  useFactory: () => {
    return ClientProxyFactory.create({
      options: {
        port: process.env.AUTH_SERVICE_PORT,
        host: process.env.AUTH_SERVICE_HOST,
      },
    });
  },
};
