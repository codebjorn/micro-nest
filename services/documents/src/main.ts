import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { DocumentsModule } from './documents.module';

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(DocumentsModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: parseInt(process.env.DOCUMENTS_SERVICE_PORT),
    },
  } as TcpOptions);
  await app.listen();
};

bootstrap();
