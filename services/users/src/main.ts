import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { UsersModule } from './users.module';

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(UsersModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: parseInt(process.env.USERS_SERVICE_PORT),
    },
  } as TcpOptions);
  await app.listen();
};

bootstrap();
