import { ClientProxyFactory } from "@nestjs/microservices";
import { Service } from "../dictionary/service.dictionary";

export const UsersClient = {
  provide: Service.Users,
  useFactory: () => {
    return ClientProxyFactory.create({
      options: {
        port: process.env.USERS_SERVICE_PORT,
        host: process.env.USERS_SERVICE_HOST,
      },
    });
  },
};
