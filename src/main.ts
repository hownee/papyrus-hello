import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { ReflectionService } from '@grpc/reflection';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['hello.v1'],
        protoPath: [join(__dirname, '../proto/hello/v1/hello.proto')],
        loader: {
          includeDirs: [join(__dirname, '../proto')],
        },
        url: '0.0.0.0:50051',

        onLoadPackageDefinition: (pkg: any, server: any) => {
          new ReflectionService(pkg).addToServer(server);
        },
      },
    },
  );
  await app.listen();
}

bootstrap();
