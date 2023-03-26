import { Service } from "../dictionary/service.dictionary";
export declare const UsersClient: {
    provide: Service;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
