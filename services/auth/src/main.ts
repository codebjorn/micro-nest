import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { AuthModule } from './auth.module';

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: parseInt(process.env.AUTH_SERVICE_PORT),
    },
  } as TcpOptions);
  await app.listen();
};

bootstrap();
